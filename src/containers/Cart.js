import { connect } from 'react-redux';
import React from 'react';
import Cart from '../components/body/Cart';
import * as actionsCart from '../actions/cart';
import { switchPage } from '../actions/Menu';
import _ from 'lodash';


const mapStateToProps = state => {
    const props = {
        items: _.uniqBy(state.cart.items, i => i.id),
        total: state.cart.items.reduce((acc, item) => acc + item.price, 0),
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    ...actionsCart,
    switchPage,
}

export default connect(
    mapStateToProps,
    actions,
)(Cart);