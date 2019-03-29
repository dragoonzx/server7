import React, { Component } from 'react';
import './chat.css'
import Message from './Message';



class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {socket: new WebSocket('wss://improveyourself.ru'), message:'', messages:[]};
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    var outgoingMessage = this.state.message;
    this.state.socket.send(outgoingMessage);
    event.preventDefault();
    this.state.socket.onmessage = evt => {
      this.setState({
        messages: this.state.messages.concat([evt.data])
      })
    };
  };
  onMessageChange(event){
    this.setState({message: event.target.value})
  }
  
  render() {
    return (
      <div>
            <div id="messagewindow">
                <Message  />
                <ul>{this.state.messages.slice(-10).map((msg,idx) => <li style={{listStyleType:'none'}} key={'msg-' +idx}>{idx + ' '}{msg}</li>)}</ul>
             </div>
             <form name="publish" onSubmit={this.onSubmit} id="send">
                <input  type="text" name="message" value={this.state.message} onChange={this.onMessageChange} placeholder='your message'></input>
                <input type="submit" value="Отправить" />
            </form>
      </div>
     );
  }
}


export default ChatWindow;
