import { connect } from 'react-redux';
import React from 'react';
import App from '../components/App';
import Home from '../components/body/Home';
import Contacts from '../components/body/Contacts';
import Shop from '../components/body/Shop';
import LogIn from '../components/body/LogIn';



const mapStateToProps = state => {
    const { page } = state.menu;
    const props = {};
    switch (page) {
        case ('Home'):
            return { ...props, Body: Home };
        case ('Contacts'):
            return { ...props, Body: Contacts };
        case ('Shop'):
            return { ...props, Body: Shop };
        case ('LogIn'):
            return { ...props, Body: LogIn };
    };
};

export default connect(
    mapStateToProps,
)(App);

