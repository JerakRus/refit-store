import { connect } from 'react-redux';
import Shop from '../components/body/Shop';

const mapStateToProps = state => {
    const props = {
        parts: state.parts,
        siteColor: state.siteColor
    };
    return props;
}

export default connect(
    mapStateToProps,
)(Shop);
