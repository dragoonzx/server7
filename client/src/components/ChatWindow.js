import React, { Component } from 'react';
import './chat.css'

class ChatWindow extends Component {
  render() {
    return (
      <div>
        <div id="chatwindow">
            <div id="messagewindow">
                messages
             </div>
        <div id="inputcontainer">
        <input id="inputcontainer" type="text" placeholder='your message'></input>
        <input id="subm" type="submit" value="Отправить" />
        </div>
        </div>
      </div>
     );
  }
}


export default ChatWindow;
