import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as actions from '../actions/Menu';

const mapStateToProps = state => {
    const props = {
        page: state.menu.page,
    };
    return props;
}

export default connect(
    mapStateToProps,
    actions,
)(Menu);
