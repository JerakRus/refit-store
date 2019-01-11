import { connect } from 'react-redux';
import React from 'react';
import Filter from '../components/body/Filter';
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
)(Filter);

