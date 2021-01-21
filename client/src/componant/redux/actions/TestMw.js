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