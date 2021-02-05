import React from 'react'

const Msg = ({username, msg}) => {
    return (
        <div>   
            {username} : {msg}
        </div>
    )
}

export default Msg
