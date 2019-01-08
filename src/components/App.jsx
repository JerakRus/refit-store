import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MenuContainer from '../containers/Menu';
import Logo from './Logo';
import Footer from './Footer';

class App extends Component {
    componentWillMount() {

    }

    render() {
        const { Body } = this.props;
      return (
        <Container>
            <Logo />
            <MenuContainer />
            <Body/>
            <Footer />
        </Container>
      );
    }
}

export default App;
