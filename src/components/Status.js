import React, { Component } from 'react';

class Address extends Component {
  render() {
    return (
      <div>
       <label>Login Status::</label><span style={{'color':'green'}}>{this.props.data.loginStatus}</span>
      </div>
    );
  }
}

export default Address;
