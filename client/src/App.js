import React, { Component } from 'react';
import Anons from './components/Anons';
import ChatWindow from './components/ChatWindow';
import faker from 'faker';

class App extends Component {
  state = {
    users: [
      {
        id:1,
        name:faker.name.findName(),
        picture: faker.image.avatar()
      },
      {
        id:2,
        name:faker.name.findName(),
        picture: faker.image.avatar()
      }
    ]
  }  
  
  render() {
    return (
      <div>
        <h1>Chat on WebSockets</h1>
        <Anons name={this.state.users[0].name} picture={this.state.users[0].picture} />
        <Anons name={this.state.users[1].name} picture={this.state.users[1].picture} />
        <ChatWindow />

      </div>
     );
  }
}

export default App;
