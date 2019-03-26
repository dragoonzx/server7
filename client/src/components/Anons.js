import React, { Component } from 'react';

class Anons extends Component {
  render() {
    return (
      <div>
        <div style={{paddingLeft:'20px',paddingTop:'20px'}}><img style={{width:'75px',height:'75px',borderRadius:'50%',verticalAlign:'top'}} src={this.props.picture}></img></div>
        <p style={{paddingLeft:'40px'}}>{this.props.name}</p>
      </div>
     );
  }
}


export default Anons;
