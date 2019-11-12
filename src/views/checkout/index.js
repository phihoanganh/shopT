import React from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    ScrollView
} from 'react-native'
import BaseView from '../base_views'
import Header from '../../widgets/header'
import { connect } from 'react-redux'
import styles from './style'
import TextField from '../../widgets/text_field'
import { doSetCheckOutInfo } from '../../actions/data_action/checkOutAction'
import { clearCartItem } from '../../actions/data_action/cartListAction'
import { doBuyProduct } from '../../actions/data_action/productListAction'

class CheckOut extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            payMethodModal: false,
            shipAddModal: false,
            isVisa: props.checkOutData.pay_method.isVisa
        }
    }

    renderBaseContent() {
        const cartList = this.props.cartListData.cart_list
        let { ship_adss, pay_method } = this.props.checkOutData

        return (
            <View style={styles.container}>
                <Header
                    backBtn={true}
                    title={'Check Out'}
                />
                <FlatList
                    style={{ flex: 1 }}
                    ListHeaderComponent={() => this.renderHeader()}
                    data={cartList}
                    renderItem={({ item, index }) => this.renderItems(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={styles.footer_box}>
                    <TouchableOpacity
                        onPress={() => {
                            if (Object.entries(ship_adss).length === 0 || Object.entries(pay_method).length === 0) {
                                this.renderPopup(
                                    'Empty',
                                    'Please check "shipping address" and "payment method" info again!',
                                    require('../../assets/images/icon_fail.png'),
                                    null,
                                    2,
                                    null
                                )
                                return
                            }
                            this.props.doBuyProduct(cartList, this.props.productListData.product_list)
                            this.props.clearCartItem()
                            this.resetPage(0, 'confirmation', null)
                        }}
                        style={styles.submit}
                        underlayColor='transparent'>
                        <Text style={styles.btn_text}>Pay</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    transparent={true}
                    visible={this.state.shipAddModal}>
                    <SafeAreaView style={styles.modal}>
                        <View style={styles.modal_box}>
                            <View style={styles.modal_title_box}>
                                <Text style={styles.title_text}>Shipping address</Text>
                                <TouchableOpacity
                                    onPress={() => this.setState({ shipAddModal: false })}
                                    style={styles.cart_btn}
                                    underlayColor='transparent'>
                                    <Image style={styles.icon} source={require('../../assets/images/icon_cancel.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <View style={styles.md_info_box}>
                                    <TextField
                                        ref="tf_name"
                                        label={'Name'}
                                        value={ship_adss.name}
                                        requireChar={true}
                                    />
                                    <TextField
                                        ref="tf_address"
                                        label={'Address'}
                                        value={ship_adss.address}
                                        requireChar={true}
                                    />
                                    <TextField
                                        ref="tf_phone"
                                        label={'Phone'}
                                        value={ship_adss.phone}
                                        isNumber={true}
                                        requireChar={true}
                                    />
                                    <TextField
                                        ref="tf_note"
                                        label={'Note'}
                                        value={ship_adss.note}
                                        multiline={true}
                                        height={120}
                                    />
                                </View>
                                <View style={styles.md_info_box}>
                                    <TouchableOpacity
                                        onPress={this.changeShippingAddress}
                                        style={styles.submit}
                                        underlayColor='transparent'>
                                        <Text style={styles.btn_text}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Modal>
                <Modal
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    transparent={true}
                    visible={this.state.payMethodModal}>
                    <SafeAreaView style={styles.modal}>
                        <View style={styles.modal_box}>
                            <View style={styles.modal_title_box}>
                                <Text style={styles.title_text}>Payment method</Text>
                                <TouchableOpacity
                                    onPress={() => this.setState({ payMethodModal: false })}
                                    style={styles.cart_btn}
                                    underlayColor='transparent'>
                                    <Image style={styles.icon} source={require('../../assets/images/icon_cancel.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <ScrollView>
                                <View style={styles.p_select_box}>
                                    <TouchableOpacity style={styles.p_select_box} onPress={() => this.setState({ isVisa: false })}>
                                        <Image style={styles.p_image} resizeMode={'contain'} source={this.state.isVisa ? require('../../assets/images/single_choice_unac.png') : require('../../assets/images/single_choice_ac.png')} ></Image>
                                        <Image style={styles.p_image} resizeMode={'contain'} source={require('../../assets/images/wallet.png')} ></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.p_select_box} onPress={() => this.setState({ isVisa: true })}>
                                        <Image style={styles.p_image} resizeMode={'contain'} source={this.state.isVisa ? require('../../assets/images/single_choice_ac.png') : require('../../assets/images/single_choice_unac.png')} ></Image>
                                        <Image style={styles.p_image} resizeMode={'contain'} source={require('../../assets/images/visa.png')} ></Image>
                                    </TouchableOpacity>
                                </View>
                                {this.state.isVisa ?
                                    <View style={styles.md_info_box}>
                                        <Text style={styles.d_text}>Visa Card</Text>

                                        <TextField
                                            requireChar={true}
                                            ref="tf_card_name"
                                            label={'Name on card'}
                                            value={pay_method.card_name}
                                        />
                                        <TextField
                                            requireChar={true}
                                            ref="tf_card_num"
                                            label={'Card number'}
                                            value={pay_method.card_num}
                                        />
                                        <TextField
                                            requireChar={true}
                                            ref="tf_card_mmdd"
                                            label={'MM/YY'}
                                            value={pay_method.card_mmdd}
                                        />
                                        <TextField
                                            requireChar={true}
                                            ref="tf_card_cvc"
                                            label={'CVC'}
                                            value={pay_method.card_cvc}
                                        />
                                    </View> :
                                    <View style={styles.md_info_box}>
                                        <Text style={styles.d_text}>Cash on Delivery</Text>
                                    </View>}
                                <View style={styles.md_info_box}>
                                    <TouchableOpacity
                                        onPress={this.changePayMethod}
                                        style={styles.submit}
                                        underlayColor='transparent'>
                                        <Text style={styles.btn_text}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        );
    }

    changeShippingAddress = () => {
        let name = this.refs.tf_name.getValue()
        let address = this.refs.tf_address.getValue()
        let phone = this.refs.tf_phone.getValue()
        let note = this.refs.tf_note.getValue()
        let tempData = this.props.checkOutData
        let passValidation = true
        tempData.ship_adss = { name, address, phone, note }
        if (!name) {
            this.refs.tf_name.setErrorText('Name must not be empty!')
            passValidation = false
        }
        if (!address) {
            this.refs.tf_address.setErrorText('Address must not be empty!')
            passValidation = false
        }
        if (!phone) {
            this.refs.tf_phone.setErrorText('Phone must not be empty!')
            passValidation = false
        }
        if (!passValidation) return
        this.props.doSetCheckOutInfo(tempData)
        this.setState({ shipAddModal: false })
    }

    changePayMethod = () => {
        let tempData = this.props.checkOutData
        if (this.state.isVisa) {
            let card_name = this.refs.tf_card_name.getValue()
            let card_num = this.refs.tf_card_num.getValue()
            let card_mmdd = this.refs.tf_card_mmdd.getValue()
            let card_cvc = this.refs.tf_card_cvc.getValue()
            let passValidation = true
            if (!card_name) {
                this.refs.tf_card_name.setErrorText('Name must not be empty!')
                passValidation = false
            }
            if (!card_num) {
                this.refs.tf_card_num.setErrorText('Must not be empty!')
                passValidation = false
            }
            if (!card_mmdd) {
                this.refs.tf_card_mmdd.setErrorText('Must not be empty!')
                passValidation = false
            }
            if (!card_cvc) {
                this.refs.tf_card_cvc.setErrorText('Must not be empty!')
                passValidation = false
            }
            if (!passValidation) return
            tempData.pay_method = { card_name, card_num, card_mmdd, card_cvc, isVisa: this.state.isVisa }
        }else{
            tempData.pay_method = {isVisa: this.state.isVisa }
        }

        this.props.doSetCheckOutInfo(tempData)
        this.setState({ payMethodModal: false })

    }

    renderHeader() {
        let { ship_adss, pay_method } = this.props.checkOutData
        return (
            <View style={styles.header}>
                <View>
                    <Text style={styles.d_text}>Order:</Text>
                    <Text style={styles.r_text}>{this.props.cartListData.summary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                </View>
                <View>
                    <Text style={styles.d_text}>Delivery:</Text>
                    <Text style={styles.r_text}>5,000 đ</Text>
                </View>
                <View>
                    <Text style={styles.s_text}>Summary:</Text>
                    <Text style={styles.r_text}>{(this.props.cartListData.summary + 5000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} đ</Text>
                </View>
                <View style={styles.underline} />
                <Text style={styles.t_text}>Shipping address:</Text>
                <View style={styles.a_box}>
                    <Text style={styles.s_text}>- Name: {ship_adss.name}</Text>
                    <Text style={styles.s_text}>- Address: {ship_adss.address}</Text>
                    <Text style={styles.s_text}>- Phone: {ship_adss.phone}</Text>
                    <Text style={styles.s_text}>- Note: {ship_adss.note}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ shipAddModal: true })
                    }}
                    style={styles.c_btn}
                    underlayColor='transparent'>
                    <Text style={styles.c_btn_text}>Change</Text>
                </TouchableOpacity>
                <View style={styles.underline} />
                <Text style={styles.t_text}>Payment method:</Text>
                <View style={styles.p_box}>
                    <Image style={styles.p_image} resizeMode={'contain'} source={pay_method.isVisa ? require('../../assets/images/visa.png') : require('../../assets/images/wallet.png')} ></Image>
                    <View style={styles.p_text_box}>
                        <Text style={styles.s_text}>{pay_method.isVisa ? 'Visa:' : 'Cash:'}</Text>
                        <Text style={styles.s_text}>{pay_method.isVisa ? pay_method.card_num : 'Cash on Delivery'}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ payMethodModal: true })
                    }}
                    style={styles.c_btn}
                    underlayColor='transparent'>
                    <Text style={styles.c_btn_text}>Change</Text>
                </TouchableOpacity>
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
        checkOutData: state.checkOutData,
        productListData: state.productListData
    };
}
export default connect(mapStateToProps, { doSetCheckOutInfo, clearCartItem, doBuyProduct })(CheckOut);
