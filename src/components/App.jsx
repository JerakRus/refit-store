import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MenuContainer from '../containers/Menu';
import BodyContainer from '../containers/Body';
import Logo from './Logo';
import Footer from './Footer';

class App extends Component {
    componentWillMount() {

    }

    render() {
      return (
        <Container>
            <Logo />
            <MenuContainer />
            <BodyContainer />
            <Footer />
        </Container>
      );
    }
}

export default App;
