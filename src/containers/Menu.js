import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingCartActions from '../actions/shoppingCart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';
import React from "react";


const mapStateToProps = ({shoppingCart}) => ({
    totalPrice: shoppingCart.items.reduce((total, phone) => total + phone.price, 0),
    count: shoppingCart.items.length,
    items: uniqBy(shoppingCart.items, o => o.id),
});

const mapDispatchToProps = dispatch =>({
    ...bindActionCreators(shoppingCartActions, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(Menu);
