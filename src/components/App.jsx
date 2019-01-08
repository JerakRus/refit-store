import React, { Component } from 'react';
import {Card, Container } from 'semantic-ui-react';
import MenuContainer from '../containers/Menu';
import Logo from './logo';
import Home from './Home';
//import Body from './Body';


class App extends Component {
    componentWillMount() {

    }

    render() {
      return (
        <Container>
            <Logo />
             <MenuContainer />
            {this.props.body}
        </Container>
      );
  }
}

export default App;
