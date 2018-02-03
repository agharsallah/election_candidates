import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  
  auth: authReducer,
  form: form
  
});

export default rootReducer;
