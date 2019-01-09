import { connect } from 'react-redux';
import React from 'react';
import Body from '../components/body';

const mapStateToProps = state => {
    const props = {
        page: state.menu.page,
    };
    return props;
};

export default connect(
    mapStateToProps,
)(Body);