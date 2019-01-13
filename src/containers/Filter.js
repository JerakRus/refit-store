import { connect } from 'react-redux';
import Filter from '../components/body/Filter';
import * as actionsFilter from '../actions/filter';


const mapStateToProps = state => {
    const props = {
        modelsParts: state.parts.models,
        modelsSmartphones: state.smartphones.models,
        filter: state.filter,
        siteColor: state.siteColor,
    };
    return props;
};


export default connect(
    mapStateToProps,
    actionsFilter,
)(Filter);

