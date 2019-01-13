import { connect } from 'react-redux';
import Cart from '../components/body/Cart';
import * as actionsCart from '../actions/cart';
import { switchPage } from '../actions/Menu';


const mapStateToProps = state => {
    const props = {
        items: state.cart,
        total: state.cart.reduce((acc, item) => acc + item.price*item.addCount, 0),
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