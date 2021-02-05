import React, {createContext} from 'react'
import io from 'socket.io-client';
import { WS_BASE } from './config';
import { useDispatch, useSelector } from 'react-redux';

const WebSocketContext = createContext(null);

const WebSocket = ({children}) => {
    let dispatch = useDispatch();
    let socket = undefined;
    let ws = undefined;

    const setNickname = (nickname) => {
        console.log('set nickname : ' + nickname);
        
    }
    const sendMessage = (roomId, message) => {
        console.log('send message');
    }


        //socket io
        if (!socket){
            console.log('connect sockret io : ' + WS_BASE);
            
            socket = io.connect(WS_BASE);
    
    
    
            ws = {
                socket: socket,
                setNickname,
                sendMessage
            }
        }
    
 
    

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

export {WebSocketContext};
export default WebSocket
