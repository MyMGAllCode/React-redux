import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Status from './Status'; 


class Address extends Component {
  render() {
    return (
      <div>
       <label>User Name in Address Component::</label><span style={{'color':'green'}}>{this.props.data.username}</span><br/><br/>
       <Status data={this.props.data}/>
       
      </div>
    );
  }
}

export default Address;
