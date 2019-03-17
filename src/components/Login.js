import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Profile from './Profile';
import {loginAction} from './actions/index';
import { bindActionCreators } from 'redux';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test:'',
            isLoggedIn:false,
            username:null,
            secret:null,
            loginErr:''
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleLogin=()=>{
        if(this.state.username!=null&&this.state.secret!=null){
            this.setState({isLoggedIn:true,loginErr:''});
            
          let userCredentials={'username':this.state.username,'secret':this.state.secret,'loginStatus':'LoggedIn'};
          this.props.loginAction(userCredentials);
        }else{
            this.setState({loginErr:'Invalid Login Credentails'})
        }
    }
    handleInput=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
  render() {
      if(this.state.isLoggedIn){
        //let userCredentials={'username':this.state.username,'secret':this.state.secret,'loginStatus':'LoggedIn'};
         // return <Profile data={userCredentials}/>
         return <Profile />
      }
    return (
      <div>
      <label>User Name:</label>
      <input type='text' name='username' onKeyPress={this.handleInput} /><br/><br/>
      <label>Password:</label>
      <input type='password' name='secret' onKeyPress={this.handleInput} /><br/><br/>
      <span style={{'color':'red'}}>{this.state.loginErr}</span><br/><br/>
      <span style={{'color':'red'}}>Id is:{this.props.id}</span><br/><br/>
      <button onClick={this.handleLogin}>Login</button>  
      </div>
    );
  }
}
//Mapthe state to the props to access directly by props
function mapStateToProps(state){
    return{
        id:state.id
    };
}
//huckup these action with redux so can accessible from props
function matchDispatchToProps(dispatch){
    return bindActionCreators({loginAction:loginAction},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Login);
