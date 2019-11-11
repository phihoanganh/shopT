import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import BaseView from '../base_views'
import Header from '../../widgets/header'
import { FlatGrid } from 'react-native-super-grid'
import { doGetProductList } from '../../actions/data_action/productListAction'
import { doAddCartItem } from '../../actions/data_action/cartListAction'
import Color from '../../global/colors';

class ProductList extends BaseView {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderBaseContent() {
        const items = this.props.productListData.product_list
        // console.log(this.props.productListData.product_list)
        return (
            <View style={styles.container}>
                <Header
                    cartBtn={true}
                    title={'Home'}
                />
                <FlatGrid
                    itemDimension={170}
                    items={items}
                    style={styles.gridView}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => { this.pushPage('product_detail', { item }) }}
            >
                <View style={styles.itemContainer}>
                    <Image
                        resizeMode='center'
                        style={{ height: 130 }}
                        source={{ uri: item.image }}
                    />
                    {(item.stock <= item.low_stock || item.stock <= item.out_stock) &&
                        <View style={[styles.mark, (item.stock <= item.out_stock) && { backgroundColor: Color.gray }]}>
                            <Text style={{ color: 'white' }}>{(item.stock <= item.out_stock) ? 'Out of stock' : 'Low stock'}</Text>
                        </View>}
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>Còn lại: {item.stock}</Text>
                    <Text style={styles.itemPrice}>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.doAddCartItem(item, this.props.cartListData.cart_list) }}
                        disabled={(item.stock <= item.out_stock)}
                        style={[styles.submit, (item.stock <= item.out_stock) && { backgroundColor: Color.gray }]}
                        underlayColor='transparent'>
                        <Text style={styles.btn_text}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    componentDidMount() {
        if (this.props.productListData.product_list.length <= 0) {
            this.props.doGetProductList()
        }
    }
}
function mapStateToProps(state) {
    return {
        nav: state.nav,
        productListData: state.productListData,
        cartListData: state.cartListData
    }
}
export default connect(mapStateToProps, { doGetProductList, doAddCartItem })(ProductList)