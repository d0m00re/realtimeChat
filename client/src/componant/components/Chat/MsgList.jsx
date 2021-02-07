import React, {useEffect} from 'react';
import Msg from './Msg';
import {useSelector} from 'react-redux'; 

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
