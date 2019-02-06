import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";


import MenuContainer from '../containers/Menu';
import HomeContainer from "../containers/Home";
import Contacts from "./body/Contacts";
import CartContainer from "../containers/Cart";
import ShopContainer from "../containers/Shop";
import NewOrderFormContainer from '../containers/NewOrderForm';
import Logo from './Logo';
import Footer from './Footer';
import OrderCreated from './body/OrderCreated';




class App extends Component {
    componentWillMount() {
        this.props.setItems();
        this.props.setPosts();
        this.props.history.push('/');
    }

    render() {
      return (
        <Container >
            <Logo />
            <MenuContainer />
            <Switch>
                <Route path='/' exact component={HomeContainer} />
                <Route path='/shop' component={ShopContainer} />
                <Route path='/cart' component={CartContainer} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/createOrder' component={NewOrderFormContainer} />
                <Route path='/orderCreated' component={OrderCreated} />
            </Switch>
            <Footer {...this.props.siteColor} />
        </Container>
      );
    }
}

export default App;
