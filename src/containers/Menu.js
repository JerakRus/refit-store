import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as actionsMenu from '../actions/Menu';
import { reset } from '../actions/filter';

const mapStateToProps = state => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
        count: state.cart.items.reduce((acc, item) => acc + 1, 0),
    };
    return props;
};

const actions = {
    ...actionsMenu,
    reset,
};

export default connect(
    mapStateToProps,
    actions,
)(Menu);
