import React, { Component } from 'react';

class Message extends Component {
  state = {
    messages:[]
  }

  componentDidMount(){
    this.connection = new WebSocket('wss://echo.websocket.org');
    this.connection.onmessage = evt => {
      this.setState({
        messages: this.state.messages.concat([evt.data])
      })
    };

    setInterval( _ =>{
      this.connection.send('ERZHAN VSTAVAI')}, 2000)
    };
  
  render() {
    return (
    <ul>{this.state.messages.slice(-10).map((msg,idx) => <li style={{listStyleType:'none'}} key={'msg-' +idx}>{msg}</li>)}</ul>
     );
  }
}


export default Message;
