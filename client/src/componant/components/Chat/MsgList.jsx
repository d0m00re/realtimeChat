import React, {useEffect} from 'react';
import Msg from './Msg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
 
import {SOCKET_SEND_USERNAME, SET_USERNAME} from './../../redux/constant/ChatV2';


import {useDispatch, useSelector} from 'react-redux'; 

//<Msg msg={msg} />
const MsgList = () => {
    const {msgList} = useSelector(state => state.ChatV2);

    useEffect(() => {
        console.log(msgList);
    }, [msgList])
    
    return (
        <div>
            msg list
            {
                msgList &&
            msgList?.map(msg => <div><Msg username={msg.username} msg={msg.message} /></div>)
            }
        </div>
    )
}

export default MsgList
