import { connect } from 'react-redux';
import React from 'react';
import Body from '../components/body';

const mapStateToProps = state => {
    const props = {
        menuPage: state.menuPage,
    };
    return props;
};

export default connect(
    mapStateToProps,
)(Body);