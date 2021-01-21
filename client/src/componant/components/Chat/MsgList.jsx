import React, {useEffect} from 'react';
import Msg from './Msg';
//<Msg msg={msg} />
const MsgList = ({msgList}) => {
    useEffect(() => {
        console.log(msgList);
    }, [msgList])
    
    return (
        <div>
            {
                msgList &&
            msgList?.map(msg => <div><Msg msg={msg} /></div>)
            }
        </div>
    )
}

export default MsgList
