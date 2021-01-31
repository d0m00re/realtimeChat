import {SEND, SEND_SUCCESS, SEND_FAIL, NEW_MESSAGE, RECEIVE, RECEIVE_SUCCESS, RECEIVE_FAIL} from './../Constant';

let TYPES =  [SEND, SEND_SUCCESS, SEND_FAIL];
let defaultParams = {
  type : 'socket',
  types : TYPES, 
}
export function connect() {
  console.log('1) connection');
  return {
    ...defaultParams,
    promise: (socket) => socket.connect()
  }
}
export function send(key, data) {
  //const message = {chatId, content};

  console.log('2) send a message: ' + key + ' : ' + data);
  //console.log(message);
  return {
      ...defaultParams, 
      promise: (socket) => socket.emit(key, data)
  } 
}

// Receive any messages.
export function receive(key) {
  console.log('chat: receive message');
  
    return (dispatch) => {
      const newMessage = (message) => {
        console.log('RECEIVE ---> message : ' + message);
        return dispatch({
          type: NEW_MESSAGE,
          result: message,
        });
      };

      console.log(newMessage);
      
      
      
      return dispatch({
        type: 'socket',
        types: [RECEIVE, RECEIVE_SUCCESS, RECEIVE_FAIL],
        promise: (socket) => socket.on(key, newMessage),
      });
    }
  }

  //-----------------------------------------------

export function sendMsg(msg) {
  //const message = {chatId, content};

  console.log('chatv2: send a message send v2 : ');
  //console.log(message);
  return {
      ...defaultParams, 
      promise: (socket) => socket.emit('sendMsgCurrentRoom', msg)
  } 
}

export function joinRoom(payload) {
  console.log('chatv2: join a room : ', payload);
  return (send('joinRoom', payload));
}

