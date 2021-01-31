import SocketClient from './middleware/SocketClient'; //'./../../../src/socketIO/SocketClient';
import SocketIOReducer from './reducers/ChatV2';

import {
  applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';


import GameReducer from './reducers/Game';
import socketMiddleware from './middleware/socketMiddleware';
import loggerMiddleware from './middleware/Logger';
  //-------------------------------
  // actions.js
  
  export const reducers = combineReducers({
    game : GameReducer,
    socketio : SocketIOReducer
  });
  
  const socketClient = new SocketClient();

  socketClient.on('SendMessage', msg => {console.log(msg)});

 function configureStore(initialState, socketClient, apiClient) {
  //const loggerMiddleware = createLogger();
   

  return createStore(combineReducers({GameReducer, apiClient}), applyMiddleware(socketMiddleware(socketClient)));
}

  export const store =  configureStore({}, socketClient, SocketIOReducer);//configureStore();
  