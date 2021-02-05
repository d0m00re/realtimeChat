import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
 
import {SOCKET_SEND_USERNAME, SET_USERNAME, SOCKET_JOIN_ROOM} from './../../redux/constant/ChatV2';


import {useDispatch, useSelector} from 'react-redux'; 

const Connexion = () => {
    const dispatch = useDispatch();
    const {username} = useSelector(state => state.ChatV2)


    const submitLogin = async () => {
        await dispatch({type : SOCKET_SEND_USERNAME});
        await dispatch({type : SOCKET_JOIN_ROOM});
    }

    return (
        <div>
            <Typography variant='h5'>
              userName : 
            </Typography>
            <Textfield value={username} onChange={(e) => dispatch({type : SET_USERNAME, payload : e.target.value})}></Textfield>
            <Button onClick={submitLogin}>Login</Button>
        </div>
    )
}

export default Connexion
