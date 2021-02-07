import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {useSelector, useDispatch} from 'react-redux';

import {SET_ROOMNAME, SOCKET_JOIN_ROOM} from './../../redux/constant/ChatV2';

function RoomCreator() {
    const dispatch = useDispatch();
    const {roomname} = useSelector(state => state.ChatV2);
    return (
        <div>
            <Typography>Create a room :</Typography>
            <TextField value={roomname} onChange={(e) => dispatch({type : SET_ROOMNAME, payload : e.target.value})} />
            <Button onClick = {() => {dispatch({type : SOCKET_JOIN_ROOM})}}>
                CREATE ROOM
            </Button>
        </div>
    )
}

export default RoomCreator
