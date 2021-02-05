import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
 
import {SEND_MESSAGE} from './../../redux/Constant'


import {useDispatch, useReducer} from 'react-redux'; 

 
//const ENDPOINT = "http://127.0.0.1:4242";

const Chat = () => {
 
    const dispatch = useDispatch();

    const [generalInfo, setGeneralInfo] = useState({
      msg : 'test',
      username : 'miaou',
      roomname: 'room1'
    });

/*
    send --> {type : 'socket'}
*/
const connectSocketIO = async() => {
  console.log('connect : ');
  
 // await dispatch(connect());
 // await dispatch(send('sendNickname', generalInfo.username));
  //await dispatch(receive('msgFromUser'));
 // receive('msgFromUser');
}
 

// go send message
    const goSendMsg = async () => {
      console.log('send msg : ' + generalInfo.msg);
      dispatch({type : SEND_MESSAGE, payload : 'pack pack'});
   //   dispatch(sendMsg(generalInfo.msg));
    }

    const goJoinRoom = async () => {
      console.log('join room : ' + generalInfo.roomname);

   //   dispatch(joinRoom(generalInfo.roomname));
    }


    const handleInfo = async (e, key) => {
      setGeneralInfo(old => ({
        ...generalInfo,
        [key] : e.target.value
      }))
    }


    return (
        <div>
 
            <Typography variant='h5'>
              userName : 
            </Typography>
            <Textfield value={generalInfo.username} onChange={(e) => handleInfo(e, 'username')}></Textfield>
           

            <div></div>

            
            <Typography variant='h5'>
              roomname : 
            </Typography>
            <Textfield value={generalInfo.roomname} onChange={(e) => handleInfo(e, 'roomname')}></Textfield>
            <Button onClick={goJoinRoom}>
              JOIN
            </Button>
            <div></div>

            <Typography variant='h5'>
              msg : 
            </Typography>
            <Textfield value={generalInfo.msg} onChange={(e) => handleInfo(e, 'msg')}></Textfield>
            <Button onClick={goSendMsg}>
              SEND
            </Button>
            <div></div>
        </div>
    )
}

export default Chat;
