import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import {Reducers} from './redux/Reducers'
import thunk from 'redux-thunk'

export const store = createStore(Reducers, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
