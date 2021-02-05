import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { store } from './componant/redux/redux';

import {ADD_MULTIPLES_MESSAGES, ADD_MESSAGE} from './componant/redux/constant/ChatV2';

const initApiSocket = (store) => {  
  // get socket init by the reducer init state
  const dispatch = store.dispatch;
  const socket = store.getState().ChatV2.socket;
  //const dispatch = store.dispatch;

  socket.on('connect', () => {console.log('connect success')});// connection
  // msgFromUser : 
  socket.on('recvMultiplesMessages', (msg) => {
    dispatch({type : ADD_MULTIPLES_MESSAGES, payload : msg});
  }) // lisyrn msgFromUser event

  socket.on('recvMessage', (msg) => {
    dispatch({type : ADD_MESSAGE, payload : msg});
  })

 //receive all message fron a room
  socket.on('getAllMessage', (listMsg) => {console.log(listMsg);});
  socket.on('getAllRoom', (listRoom) => {console.log(listRoom)});
}

initApiSocket(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
