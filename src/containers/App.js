import { connect } from 'react-redux';
import React from 'react';
import App from '../components/App';
import * as actions from '../actions/asyncActions';

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    actions,
)(App);

