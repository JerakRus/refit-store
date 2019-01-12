import { connect } from 'react-redux';
import ItemShop from '../components/body/ItemShop';
import * as actionsMenu from '../actions/Menu';
import { addToCart } from '../actions/cart';

const mapStateToProps = (state, { item: { id }}) => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
        addedCount: state.cart.items.reduce((acc, i) => i.id === id ? acc + 1 : acc, 0),
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
