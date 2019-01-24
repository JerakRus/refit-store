import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import NewOrderForm from '../components/body/NewOrderForm';
import { sendToMail } from '../actions/order';


const mapStateToProps = (state) => {
    const props = {
        cart: state.cart,
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    sendToMail,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(NewOrderForm));