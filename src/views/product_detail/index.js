import React from 'react'
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import BaseView from '../base_views'
import Header from '../../widgets/header'
import Color from '../../global/colors'
import { connect } from 'react-redux'
import styles from './style'
import { doAddCartItem } from '../../actions/data_action/cartListAction'

class ProductDetail extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderBaseContent() {
        let item = this.getPassingParam('item')
        // let image = this.getPassingParam('image')
        // let price = this.getPassingParam('price')
        // let des = this.getPassingParam('des')
        // let stock =
        return (
            <View style={styles.container}>
                <Header
                    cartBtn={true}
                    backBtn={true}
                    title={item.name}
                />
                <ScrollView>
                    <Image
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri: item.image }}
                    />
                    <View style={styles.info_box}>
                        <Text style={styles.itemPrice}>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                        <Text style={styles.des}>{item.des}</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.doAddCartItem(item, this.props.cartListData.cart_list) }}
                            disabled={(item.stock <= item.out_stock)}
                            style={[styles.submit, (item.stock <= item.out_stock) && { backgroundColor: Color.gray }]}
                            underlayColor='transparent'>
                            <Text style={styles.btn_text}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
    componentDidMount() {

    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        cartListData: state.cartListData
    };
}
export default connect(mapStateToProps, { doAddCartItem })(ProductDetail);
