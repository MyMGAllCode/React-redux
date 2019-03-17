
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

const testReducerr=()=>({id:'1',pass:'12345'});
const allReducres=combineReducers({
    test:testReducerr,
   // loginReducer:loginReducer

});
console.log('loginReducer',loginReducer);
export default allReducres;
