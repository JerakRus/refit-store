import { connect } from 'react-redux';
import ItemShop from '../components/body/ItemShop';
import { addToCart } from '../actions/cart';

const mapStateToProps = (state, { item }) => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    addToCart,
};

export default connect(
    mapStateToProps,
    actions,
)(ItemShop);
