import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as actionsMenu from '../actions/Menu';
import { reset } from '../actions/filter';

const mapStateToProps = state => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
        count: state.cart.reduce((acc, item) => acc + item.addCount, 0),
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
