import React, { Component } from 'react';

class App extends Component {
    componentWillMount() {

    }

    render() {
      const { parts } = this.props;
      return (
        <div>
            <ul>
                {parts.map(part => <li key={part.id}>{part.id} {part.name}</li>)}
            </ul>
        </div>
      );
  }
}

export default App;
