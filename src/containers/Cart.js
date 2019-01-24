import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import Cart from '../components/body/Cart';
import * as actionsCart from '../actions/cart';
import { switchPage} from "../actions/menu";


const mapStateToProps = state => {
    const props = {
        items: state.cart,
        total: state.cart.reduce((acc, item) => acc + item.price*item.addCount, 0),
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    switchPage,
    ...actionsCart,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(Cart));