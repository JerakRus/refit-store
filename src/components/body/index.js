import React from 'react';
import Home from "./Home";
import Contacts from "./Contacts";
import Shop from "./Shop";
import LogIn from "./LogIn";


const Body = ({page}) => {
    switch (page) {
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