import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class App extends Component {
    componentWillMount() {

    }

    render() {
      const { parts } = this.props;
      return (
        <div>
            { <Card.Group items={parts} onClick={() => console.log('click')} /> }
        </div>
      );
  }
}

export default App;
