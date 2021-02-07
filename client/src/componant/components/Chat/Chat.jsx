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
  }

export default Chat;
