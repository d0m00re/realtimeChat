import SocketClient from './middleware/socketMiddlewareV2'; //'./../../../src/socketIO/SocketClient';

import {
  applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';

import ChatV2 from './reducers/ChatV2';
   //-------------------------------
  // actions.js

  //export const store =  createStore({}, combineReducers({GameReducer}) ,applyMiddleware(SocketClient));//configureStore();
export const store =  createStore(combineReducers({ChatV2}), applyMiddleware(SocketClient));