import { connect } from 'react-redux';
import React from 'react';
import App from '../components/App';
import Home from '../components/Home'



const mapStateToProps = state => {
    const props = {
        body: <Home />,
    };
    return props;
};

export default connect(
    mapStateToProps,
)(App);

