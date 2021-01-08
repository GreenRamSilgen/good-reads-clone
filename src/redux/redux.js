import { createStore } from 'redux';
import loginReducer from './UserLogin/loginReducer';
import {createStore} from 'redux';


let appStore = createStore(loginReducer);

