import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";


import MenuContainer from '../containers/Menu';
import Home from "./body/Home";
import Contacts from "./body/Contacts";
import CartContainer from "../containers/Cart";
import ShopContainer from "../containers/Shop";
import NewOrderForm from '../containers/NewOrderForm';
import Logo from './Logo';
import Footer from './Footer';
import OrderCreated from './body/OrderCreated';




class App extends Component {
    componentWillMount() {
        this.props.setParts();
        this.props.setSmartphones();
        this.props.setNumbers();
        this.props.history.push('/');
    }

    render() {
      return (
        <Container >
            <Logo />
            <MenuContainer />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' component={ShopContainer} />
                <Route path='/cart' component={CartContainer} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/createOrder' component={NewOrderForm} />
                <Route path='/orderCreated' component={OrderCreated} />
            </Switch>
            <Footer {...this.props.siteColor} />
        </Container>
      );
    }
}

export default App;
