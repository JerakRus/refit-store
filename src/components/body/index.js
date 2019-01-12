import React from 'react';
import Home from "./Home";
import Contacts from "./Contacts";
import CartContainer from "../../containers/Cart";
import ShopContainer from "../../containers/Shop";



const Body = ({menuPage}) => {
    switch (menuPage) {
        case ('Home'):
            return <Home />;
        case ('Contacts'):
            return <Contacts />;
        case ('Shop'):
            return <ShopContainer />;
        case ('Cart'):
            return <CartContainer />;
        default:
            return <Home />;
    }
};

export default Body;