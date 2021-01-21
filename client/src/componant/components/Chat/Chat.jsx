import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import MsgList from './MsgList';

import socketIOClient from "socket.io-client";

import {useDispatch, useReducer} from 'react-redux';

import {send} from './../../redux/actions/TestMw';

//const ENDPOINT = "http://127.0.0.1:4242";

const Chat = () => {
//    const [socketIO, setSocketIO] = useState();
    const [msg, setMsg] = useState('');
    const [msgList, setMsgList] = useState([]);
    const dispatch = useDispatch();

    const [roomName, setRoomName] = useState('');

    useEffect(() => {
//
/*        const socket = socketIOClient(ENDPOINT);

        socket.on('connect', () => {
            // either with send()
            socket.send('Hello!');          
          });

        
          
          // handle the event sent with socket.send()
          socket.on('message', data => {
            console.log(data);
          });
          
          // handle the event sent with socket.emit()
          socket.on('greetings', (elem1, elem2, elem3) => {
            console.log(elem1, elem2, elem3);
          });

          socket.on('allMessage', (msg) => {
            console.log('msg receive : ');
            console.log(msg);
            setMsgList((old) => [...old, msg]);
          });

        setSocketIO(socket);
  */
      }, []);

    const handleMsg = (e) => {
      setMsg(e.target.value);
    }

    const submitMsg = () => {
      socketIO.emit("message", msg);
      setMsgList((old) => [...old, msg]);
      setMsg('');
    }

    const joinRoom = () => {
      console.log('go join a room : ' + roomName);
      //socketIO.(roomName);
      socketIO.emit('join room', roomName);
      //socket.to(roomName).emit('mon gros chibre');
    }

    const sendMsgToRoom = (msg) => {
      console.log(`${roomName})${msg}`);
      socketIO.emit('message', 'fuck');
    }

    const mdTest = () => {
      console.log('go go go')
      dispatch(send('miaou', 'hello world'));
    }

    return (
        <div>
            <MsgList  msgList={msgList}/>

            <Textfield
              value = {msg}
              onChange = {handleMsg}
            />
            <Button onClick={() => sendMsgToRoom(msg)}>
              SEND MSG
              </Button>

            

            <Textfield value={roomName} onChange={(e) => setRoomName(e.target.value)}></Textfield>
            <Button onClick={joinRoom}>JOIN ROOM</Button>

            <div></div>
            <Button onClick={() => mdTest()}>
              SEND SOCKET MIDDLEWARE
            </Button>
        </div>
    )
}

export default Chat;
