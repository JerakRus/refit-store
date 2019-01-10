import { connect } from 'react-redux';
import React from 'react';
import Filter from '../components/body/Filter';
import * as actions from '../actions/asyncActions';

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    actions,
)(Filter);

