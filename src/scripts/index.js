import React from 'react';
import { render } from 'react-dom';
// Import HTML
import '../index.html';
// Import css
import '../styles/styles.css';
// Import Components
import App from './app';


// ant-d-mobile 目前支持很差，故只打通使用，不深入
// import index from './components/mobile';

//ant-d桌面版
import index from './pages/pc';
import detail from './pages/pc/detail';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index.js';

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <Route path="/index" component={index}></Route>
        <Route path="/detail" component={detail}></Route>
        <Route path="*" component={index} />
        <IndexRoute component={index}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));
