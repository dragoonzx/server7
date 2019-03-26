import React, { Component } from 'react';
import Anons from './components/Anons';
import ChatWindow from './components/ChatWindow';

class App extends Component {
  state = {
    users: [
      {
        id:1,
        name:'tyan',
        picture:'https://pp.userapi.com/c846522/v846522856/5ae68/8r5wqBqllwo.jpg'
      },
      {
        id:2,
        name:'kun',
        picture:'https://pp.userapi.com/c846219/v846219528/1ad551/f7Y5Sy6Vdg8.jpg'
      }
    ]
  }  
  
  render() {
    return (
      <div>
        <h1 style={{backgroundColor:'red'}}>Chat on WebSockets</h1>
        <Anons name={this.state.users[0].name} picture={this.state.users[0].picture} />
        <Anons name={this.state.users[1].name} picture={this.state.users[1].picture} />
        <ChatWindow />

      </div>
     );
  }
}

export default App;
