import { connect } from 'react-redux';
import React from 'react';
import App from '../components/App';

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
)(App);

