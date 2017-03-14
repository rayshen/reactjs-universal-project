import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';

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
