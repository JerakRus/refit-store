import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Filter from '../components/body/Filter';
import * as actionsFilter from '../actions/filter';


const mapStateToProps = state => {
    const props = {
        modelsParts: state.parts.models.sort(),
        modelsSmartphones: state.smartphones.models.sort(),
        filter: state.filter,
        siteColor: state.siteColor,
    };
    return props;
};


export default withRouter(connect(
    mapStateToProps,
    actionsFilter,
)(Filter));

