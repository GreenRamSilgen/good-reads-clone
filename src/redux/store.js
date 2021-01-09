import { createStore } from 'redux';
import loginReducer from './UserLogin';


const store = createStore(loginReducer);

export default store;