import { connect } from 'react-redux';
import ItemShop from '../components/body/ItemShop';
import * as actionsMenu from '../actions/Menu';
import { addToCart } from '../actions/cart';

const mapStateToProps = (state, { item }) => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    ...actionsMenu,
    addToCart,
};

export default connect(
    mapStateToProps,
    actions,
)(ItemShop);
