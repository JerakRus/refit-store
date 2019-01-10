import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MenuContainer from '../containers/Menu';
import BodyContainer from '../containers/Body';
import Logo from './Logo';
import Footer from './Footer';

class App extends Component {
    componentWillMount() {
        this.props.setParts();
    }

    render() {
        console.log(this.props.siteColor);
      return (
        <Container>
            <Logo />
            <MenuContainer />
            <BodyContainer />
            <Footer {...this.props.siteColor} />
        </Container>
      );
    }
}

export default App;
