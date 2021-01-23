import {SEND, SEND_SUCCESS, SEND_FAIL} from './../Constant';

export function send(chatId, content) {
    const message = {chatId, content};

    console.log(' send a message : ');
    console.log(message);
    return {
        type : 'socket',
        types : [SEND, SEND_SUCCESS, SEND_FAIL],
        promise: (socket) => socket.emit('SendMessage', message)
    }
}

// Receive any messages.
export function receive() {
    return (dispatch) => {
      const newMessage = (message) => {
        return dispatch({
          type: NEW_MESSAGE,
          result: message,
        });
      };
  
      return dispatch({
        type: 'socket',
        types: [RECEIVE, RECEIVE_SUCCESS, RECEIVE_FAIL],
        promise: (socket) => socket.on('ReceiveMessage', newMessage),
      });
    }
  }