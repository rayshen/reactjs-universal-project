import { createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

import {appReducer} from './app';

const rootReducer = combineReducers({app:appReducer, routing: routerReducer});


const configureStore = (initialState) =>{
    return createStore(rootReducer,initialState,applyMiddleware(thunk));
}

//初始化缓存
let darkMode = localStorage.getItem('DARK_MODE') == '1'?true:false;

const store = configureStore({
  app:{
    darkMode
  }
});

export default store;
