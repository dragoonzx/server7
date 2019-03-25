import React, { Component } from 'react';
import { subscribeToTimer } from './api';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {timestamp : 'no timestamp yet'};
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }))
  };

  render() {
    return (
      <div>
        <h1>This is the timer value: {this.state.timestamp}</h1>
      </div>
    );
  }
}

export default App;
