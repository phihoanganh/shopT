import React from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
import BaseView from '../base_views'
import Header from '../../widgets/header'
import { connect } from 'react-redux'
import styles from './style'

class Confirmation extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            payMethodModal: false,
            shipAddModal: false,
            isVisa: true
        }
    }

    renderBaseContent() {
        const reportList = this.props.cartListData.confirm_list
        return (
            <View style={styles.container}>
                <Header
                    title={'Confirmation'}
                />
                <FlatList
                    style={{ flex: 1 }}
                    ListHeaderComponent={() => this.renderHeader()}
                    data={reportList}
                    renderItem={({ item, index }) => this.renderItems(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.footer_box}>
                    <TouchableOpacity
                        onPress={() => {
                            this.resetPage(0, 'product_list', null)
                        }}
                        style={styles.submit}
                        underlayColor='transparent'>
                        <Text style={styles.btn_text}>Continue shopping</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderHeader() {
        let { ship_adss, pay_method } = this.props.checkOutData
        return (
            <View style={styles.header}>
                <View>
                    <Text style={styles.d_text}>Order:</Text>
                    <Text style={styles.r_text}>{this.props.cartListData.confirm_summary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                </View>
                <View>
                    <Text style={styles.d_text}>Delivery:</Text>
                    <Text style={styles.r_text}>5,000 đ</Text>
                </View>
                <View>
                    <Text style={styles.s_text}>Summary:</Text>
                    <Text style={styles.r_text}>{(this.props.cartListData.confirm_summary + 5000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                </View>
                <View style={styles.underline} />
                <Text style={styles.t_text}>Shipping address:</Text>
                <View style={styles.a_box}>
                    <Text style={styles.s_text}>- Name: {ship_adss.name}</Text>
                    <Text style={styles.s_text}>- Address: {ship_adss.address}</Text>
                    <Text style={styles.s_text}>- Phone: {ship_adss.phone}</Text>
                    <Text style={styles.s_text}>- Note: {ship_adss.note}</Text>
                </View>
                <View style={styles.underline} />
                <Text style={styles.t_text}>Payment method:</Text>
                <View style={styles.p_box}>
                    <Image style={styles.p_image} resizeMode={'contain'} source={pay_method.isVisa ? require('../../assets/images/visa.png') : require('../../assets/images/wallet.png')} ></Image>
                    <View style={styles.p_text_box}>
                        <Text style={styles.s_text}>{pay_method.isVisa ? 'Visa:' : 'Cash:'}</Text>
                        <Text style={styles.s_text}>{pay_method.isVisa ? pay_method.card_num : 'Cash on Delivery'}</Text>
                    </View>
                </View>
                <View style={styles.underline} />
            </View>
        )
    }
    renderItems(item, index) {
        return (
            <View style={styles.row}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: item.image }}
                />
                <View style={styles.item_info_box}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.item_price}>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                    <Text style={styles.total_item_price}>Total: {(item.price * item.num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                </View>
            </View>
        )
    }
    componentDidMount() {

    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        cartListData: state.cartListData,
        checkOutData: state.checkOutData
    };
}
export default connect(mapStateToProps, null)(Confirmation);
