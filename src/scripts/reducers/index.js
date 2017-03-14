import appReducer from './app';
import { routerReducer } from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({app:appReducer, routing: routerReducer});
export default rootReducer;