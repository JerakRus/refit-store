import { connect } from 'react-redux';
import Shop from '../components/body/Shop';
import * as actions from '../actions/asyncActions';

const mapStateToProps = state => {
    const props = {
        parts: Object.values(state.parts),
        siteColor: state.siteColor
    };
    return props;
}

export default connect(
    mapStateToProps,
    actions,
)(Shop);
