import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as actions from '../actions/Menu';

const mapStateToProps = state => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
    };
    return props;
}

export default connect(
    mapStateToProps,
    actions,
)(Menu);
