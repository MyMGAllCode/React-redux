import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import MyRouter from './MyRouter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducres from './components/reducers/index'
import * as serviceWorker from './serviceWorker';
const testReduc=()=>({id:'1',pass:'12345'});
const store =createStore(allReducres);
console.log('store.getState()',store.getState())
const testReducerr=()=>({id:'1',pass:'12345'});

ReactDOM.render(<Provider store={store}><BrowserRouter ><MyRouter /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
