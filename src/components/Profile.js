import React, { Component } from 'react';
import Addreess from './Address';
import {connect} from 'react-redux';
 


class Profile extends Component {
  render() {
      console.log("props Data:",this.props);
    return (

      <div>
      <label>User Name::</label><span style={{'color':'green'}}>{this.props.credentials.username}</span><br/><br/>
      <label>Password::</label><span style={{'color':'green'}}>{this.props.credentials.secret}</span><br/><br/>
      <Addreess data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    credentials:{username:state.username,secret:state.secret}
  };
}

export default connect(mapStateToProps)(Profile);
