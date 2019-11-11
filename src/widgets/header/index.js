import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    Image,
    SafeAreaView,
    FlatList
} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { doGetCartList, doMinusCartItem, doAddCartItem, doRemoveCartItem } from '../../actions/data_action/cartListAction'

var styles = require('./styles');
const PropTypes = require('prop-types')

class Header extends Component {
    static propTypes = {
        backBtn: PropTypes.bool,
        cartBtn: PropTypes.bool,
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    render() {
        const reportList = this.props.cartListData.cart_list
        const count = this.props.cartListData.count
        return (
            <View style={styles.title_box}>
                <Text style={styles.title_text}>{this.props.title}</Text>
                {this.props.backBtn && <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={styles.back_btn}
                    underlayColor='transparent'>
                    <Image style={styles.icon} resizeMode={'contain'} source={require('../../assets/images/icon_back.png')}></Image>
                </TouchableOpacity>}
                {this.props.cartBtn && <TouchableOpacity
                    onPress={() => this.setState({ modalVisible: true })}
                    style={styles.cart_btn}
                    underlayColor='transparent'>
                    <Image style={styles.icon} source={require('../../assets/images/cart.png')}></Image>
                    {(count > 0) && <View style={styles.text_cart_box}>
                        <Text style={styles.text_cart}>{count}</Text>
                    </View>}
                </TouchableOpacity>}
                {this.props.cartBtn && <Modal
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <SafeAreaView style={styles.modal}>
                        <View style={styles.modal_box} >
                            <View style={styles.modal_title_box}>
                                <Text style={styles.title_text}>Cart</Text>
                                <TouchableOpacity
                                    onPress={() => this.setState({ modalVisible: false })}
                                    style={styles.cart_btn}
                                    underlayColor='transparent'>
                                    <Image style={styles.icon} source={require('../../assets/images/icon_cancel.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                ListHeaderComponent={() => ((reportList.length == 0) &&
                                    <Text style={styles.flat_list_mess}>Empty Cart</Text>)
                                }
                                ListFooterComponent={() => this.renderFooter()}
                                data={reportList}
                                renderItem={({ item, index }) => this.renderItems(item, index)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </SafeAreaView>
                </Modal>}
            </View>
        )
    }
    renderFooter() {
        const count = this.props.cartListData.count
        if (!count) return null
        return (
            <View style={styles.footer}>
                <Text style={styles.ft_text}>Total: {this.props.cartListData.summary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ modalVisible: false })
                        const { navigate } = this.props.navigation;
                        navigate('checkout', {});
                    }}
                    style={styles.submit}
                    underlayColor='transparent'>
                    <Text style={styles.btn_text}>Check out</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderItems(item, index) {
        return (
            <View style={[styles.row, index == 0 && { paddingTop: 8 }]}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.image }}
                />
                <View style={styles.item_info_box}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.item_price}>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                    <Text style={styles.total_item_price}>Total: {(item.price * item.num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.doRemoveCartItem(index, this.props.cartListData.cart_list) }}
                        style={styles.item_btn}
                        underlayColor='transparent'>
                        <Image style={styles.item_icon} source={require('../../assets/images/trash.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.item_qua_box}>
                    <TouchableOpacity
                        onPress={() => { this.props.doAddCartItem(item, this.props.cartListData.cart_list) }}
                        style={styles.item_btn}
                        underlayColor='transparent'>
                        <Image style={styles.item_icon} source={require('../../assets/images/icon_add.png')}></Image>
                    </TouchableOpacity>
                    <View style={styles.num_box}>
                        <Text style={styles.name}>{item.num}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.props.doMinusCartItem(item, this.props.cartListData.cart_list) }}
                        style={styles.item_btn}
                        underlayColor='transparent'>
                        <Image style={styles.item_icon} source={require('../../assets/images/icon_minus.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    componentDidMount() {
        if (this.props.cartListData.cart_list.length <= 0) {
            this.props.doGetCartList()
        }
    }
}
function mapStateToProps(state) {
    return {
        nav: state.nav,
        cartListData: state.cartListData
    };
}
export default withNavigation(connect(mapStateToProps, { doGetCartList, doMinusCartItem, doAddCartItem, doRemoveCartItem })(Header))
// export default connect(mapStateToProps, null)(Header);
