import { connect } from 'react-redux';
import React from 'react';
import Filter from '../components/body/Filter';
import * as actionsFilter from '../actions/filter';


const mapStateToProps = state => state;


export default connect(
    mapStateToProps,
    actionsFilter,
)(Filter);

