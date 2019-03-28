import React, { Component } from 'react';
import './chat.css'
import Message from './Message';

class ChatWindow extends Component {
  render() {
    return (
      <div>
            <div id="messagewindow">
                <Message />
             </div>
             <div id="send">
                <input  type="text" placeholder='your message'></input>
                <input type="submit" value="Отправить" />
            </div>
      </div>
     );
  }
}


export default ChatWindow;
