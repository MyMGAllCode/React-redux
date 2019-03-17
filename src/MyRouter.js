

import React ,{Component} from 'react';
 import ReactDOM from 'react-dom';

 import {Route,Switch } from 'react-router';
 import Home from './components/Home';
 import Login from './components/Login';
 import Profile from './components/Profile';
 import Address from './components/Address';



  const MYRouter=()=>

    <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/address" component={Address}/>
        <Route  path="/profile" component={Profile}/>
        </Switch>
    </main>
 export default MYRouter;


