import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { SOCKET_SEND_USERNAME, SET_USERNAME, SOCKET_JOIN_ROOM } from './../../redux/constant/ChatV2';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center'
    },
    container : {
        display: 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : '100vw',
        height: '100vh'
    },
    itemPaper : {
        backgroundColor: 'grey',
        padding: '10px'
    },
    typoUsername : {
        display:'inline-block', paddingRight:'8px'
    },
    button : {
        justifyContent:'center', margin:'16px'
    }
});

const Connexion = () => {
    const dispatch = useDispatch();
    const { username } = useSelector(state => state.ChatV2);
    const classes = useStyles();


    const submitLogin = async () => {
        await dispatch({ type: SOCKET_SEND_USERNAME });
        await dispatch({ type: SOCKET_JOIN_ROOM });
    }

    return (
        <div className={classes.container}>
                <Paper elevation={3} className={classes.itemPaper}>
                    <Typography variant='h2'>
                        REAL TIME CHAT
                    </Typography>
                    <Typography variant='h5' className={classes.typoUsername}>
                        Username :
                    </Typography>
                    <Textfield value={username} onChange={(e) => dispatch({ type: SET_USERNAME, payload: e.target.value })}></Textfield>
                    <div></div>
                    <Box textAlign='right'>
                        <Button variant='contained' className={classes.button} onClick={submitLogin}>Login</Button>
                    </Box>
                </Paper>
        </div>
    )
}

export default Connexion
