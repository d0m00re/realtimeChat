import React from 'react'
import {useSelector} from 'react-redux'; 


import Connexion from './Connexion';
import RoomSelector from './RoomSelector';
import RoomCreator from './RoomCreator';
import MsgList from './MsgList';
import WriteMessage from './WriteMessage';

 
//const ENDPOINT = "http://127.0.0.1:4242";

const Chat = () => {
    const {validUsername} = useSelector(state => state.ChatV2)
 
    return (
      <>
      {(!validUsername) &&
        <Connexion />}
      {validUsername &&
      <>
        <WriteMessage />
        <RoomSelector />
        <RoomCreator />
        <MsgList />
      </>
      }
      </>
    )
    /*
    return (
        <div>
 
            <Typography variant='h5'>
              userName : 
            </Typography>
            <Textfield value={username} onChange={(e) => dispatch({type : SET_USERNAME, payload : e.target.value})}></Textfield>
           

            <div></div>

            
            <Typography variant='h5'>
              roomname : 
            </Typography>
            <Textfield value={roomname} onChange={(e) => dispatch({type : SET_ROOMNAME, payload : e.target.value})}></Textfield>
            <Button onClick={goJoinRoom}>
              JOIN
            </Button>
            <div></div>

            <Typography variant='h5'>
              msg : 
            </Typography>
            <Textfield value={message} onChange={(e) => dispatch({type : SET_MESSAGE, payload : e.target.value})}></Textfield>
            <Button onClick={goSendMsg}>
              SEND
            </Button>
            <div></div>
        </div>
    )
*/
  }

export default Chat;
