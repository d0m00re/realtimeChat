import {ADD_MULTIPLES_MESSAGES, ADD_MESSAGE, SET_USERNAME, SET_ROOMNAME, SET_MESSAGE, SOCKET_SEND_MSG, VALID_USERNAME} from './../constant/ChatV2' //'./../constant/ChatV2';
import * as io from 'socket.io-client';
import {WS_BASE} from './../../../config';
/*
** init sicket state, create our reducer
*/
const defaultState = () => {
    const socket = io.connect(WS_BASE);

    return {
        socket : socket,
        username : '',
        validUsername : false,
        roomname : '',
        message : '',
        msgList : [{username : 'jack', message : 'john'}, {username : 'jackouille', message : 'est tu la???'}],
        error : false,
    }
}

export default function reducer(state = defaultState(), action = {}) {
    switch(action.type){
        case SET_USERNAME:
            return {
                ...state,
                username : action.payload
            }
        case SET_ROOMNAME:
            return {
                ...state,
                roomname : action.payload
            } 

        case SET_MESSAGE:
            return {
                ...state,
                message : action.payload
            }
        case VALID_USERNAME:
            return {
                ...state,
                validUsername : true
            }

        case SOCKET_SEND_MSG:
            console.log('socket send message.');
            
            return {
                ...state,
                message : ''
            }
 
        // push message 
        case ADD_MESSAGE:
            console.log('add message');
            console.log(action.payload);
            
            
            let tmplistmsg = [...state.msgList, action.payload];

            return {
                ...state,
                msgList : tmplistmsg,
                message : ''
            }

        case ADD_MULTIPLES_MESSAGES:
            return {
                ...state,
                msgList : action.payload
            }
        
        
        default:
            return state;
    }
}