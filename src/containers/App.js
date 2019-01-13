import { connect } from 'react-redux';
import App from '../components/App';
import * as actionsParts from '../actions/parts';
import * as actionsSmartphones from '../actions/smartphones';
import * as actionsNumbers from '../actions/numbers';

const mapStateToProps = state => state;

const actions = {
    ...actionsParts,
    ...actionsSmartphones,
    ...actionsNumbers,
};


export default connect(
    mapStateToProps,
    actions,
)(App);

