import React from 'react';
import Home from "./Home";
import Contacts from "./Contacts";
import Shop from "../../containers/Shop";
import LogIn from "./LogIn";


const Body = ({menuPage}) => {
    switch (menuPage) {
        case ('Home'):
            return <Home />;
        case ('Contacts'):
            return <Contacts />;
        case ('Shop'):
            return <Shop />;
        case ('LogIn'):
            return <LogIn />;
        default:
            return <Home />;
    }
};

export default Body;