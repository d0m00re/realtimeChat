import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';

import {SOCKET_SEND_MESSAGE, SET_USERNAME, SET_ROOMNAME, SET_MESSAGE, SET_MSG_LIST, SOCKET_SEND_MSG} from './../../redux/constant/ChatV2';
import {useDispatch, useSelector} from 'react-redux'; 

function WriteMessage() {
     
    const dispatch = useDispatch();
    const {message} = useSelector(state => state.ChatV2)
    return (
        <div>
           <Typography variant='h5'>
              msg : 
            </Typography>
            <Textfield value={message} onChange={(e) => dispatch({type : SET_MESSAGE, payload : e.target.value})}></Textfield>
            <Button onClick={() => {dispatch({type : SOCKET_SEND_MESSAGE})}}>
              SEND
            </Button> 
        </div>
    )
}

export default WriteMessage
