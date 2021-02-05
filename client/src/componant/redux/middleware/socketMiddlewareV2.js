import {ADD_MESSAGE, SOCKET_JOIN_ROOM, SET_ROOMNAME, SOCKET_SEND_MESSAGE, SOCKET_SEND_USERNAME, VALID_USERNAME } from './../constant/ChatV2';

const socketIoMiddleware = ({ getState }) => {
    return (next) => (action) => {
        let { type, payload } = action;
        let state = getState().ChatV2;
        let socket = state.socket;

        const sendMessage = () => {
            socket.emit('sendMessage', {
                username: state.username,
                message: state.message
            });
            next({type : ADD_MESSAGE, payload : {message : state.message, username : state.username}});
        }

        const sendUsername = () => {
            socket.emit('setUsername', state.username);
        }

        const joinRoom = () => {
            // initial case
            if (state.roomname === '')
            {                
                socket.emit('joinRoom', '#general');
                next({type : SET_ROOMNAME, payload : '#general'});
            }
            else
            {
                socket.emit('joinRoom', state.roomname);
            }
        }

        switch (type) {
            case SOCKET_SEND_USERNAME:
                sendUsername();
                next({type: VALID_USERNAME})
                break;

            case SOCKET_SEND_MESSAGE:
                sendMessage();
                break;

            case SOCKET_JOIN_ROOM:
                console.log('set roomname : ' + state.roomname);
                joinRoom();
                break;

            default:
                console.log('nothing found');

        }

        return next(action);
    }
}

export default socketIoMiddleware;