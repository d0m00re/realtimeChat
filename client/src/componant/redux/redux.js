import SocketClient from './../../../src/socketIO/SocketClient';
import SocketIOReducer from './reducers/ChatV2';

import {
  applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';


import GameReducer from './reducers/Game';
import socketMiddleware from './middleware/socketMiddleware';

  //-------------------------------
  // actions.js
  
  export const reducers = combineReducers({
    game : GameReducer,
    socketio : SocketIOReducer
  });
  
  const socketClient = new SocketClient();

  socketClient.on('SendMessage', msg => {console.log(msg)});

  /*
  (socketClient) => client.on('SendMessage', (data) => {
    console.log('coucou');
    console.log(data);
*/


  // store.js
  
  //export function configureStore(initialState = {}) {
    /*
      S = any,
      A extends Action = AnyAction
      M extends Middleware<S>
    */
   /*
    const store = createStore(reducers,
                    initialState,
                    [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), socketClient]);
    */
   /*
   const middleware = [
     socketMiddleware(socketClient)
   ];
   const store = createStore(
     reducers,
     middleware
   );
     return store;
  };
  */

 function configureStore(initialState, socketClient, apiClient) {
  //const loggerMiddleware = createLogger();
  const middleware = [
    socketMiddleware(socketClient),
  ];

  return createStore(combineReducers({GameReducer, apiClient}), applyMiddleware(socketMiddleware(socketClient)));
}

  export const store =  configureStore({}, socketClient, SocketIOReducer);//configureStore();
  