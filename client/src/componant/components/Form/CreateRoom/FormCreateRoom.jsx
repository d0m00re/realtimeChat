import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';

import {
    UPDATE_ROOM, 
  } from './../../../context/Constant';

const FormCreateRoom = () => {
    const state= useSelector(state => state.game)
    const dispatch = useDispatch(); 
    
    const handleRoomname = (event) => {
        dispatch({type : UPDATE_ROOM, payload : event.target.value})
    }

    return (
        <>
            <TextField label="name" type="text" value={state.roomname} onChange={handleRoomname}/>
            <Button variant='contained'>CREATE ROOM</Button>
        </>
    )
}

export default FormCreateRoom
