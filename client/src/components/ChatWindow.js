import React, { Component } from 'react';
import './chat.css'

class ChatWindow extends Component {
    
  state = {socket: new WebSocket('wss://improveyourself.ru'), message:'',messages:[]}

  componentDidMount(){
    this.state.socket.onopen = () => {
      this.setState({
        messages: this.state.messages.concat(['YOU CAN CHAT NOW!'])});
    };

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
    this.setState({
      message: ''
    })
  };

  onMessageChange(event){
    this.setState({message: event.target.value})
  }
  
  render() {
    return (
      <div>
            <div id="messagewindow">
                <ul>{this.state.messages.slice(-10).map((msg,idx) => <li style={{listStyleType:'none'}} key={'msg-' +idx}>{'user ' + this.state.socket + ' says: '}{msg}</li>)}</ul>
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
