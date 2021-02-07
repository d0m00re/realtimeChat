import React from 'react'

import Button from '@material-ui/core/Button';

import {useSelector} from 'react-redux'

function RoomSelector() {
    const {roomsList, currentRoom} = useSelector(state => state.ChatV2);

    return (
        <div>
            room selector
            {
                roomsList.map(room => <Button>{room}</Button>)
            }
        </div>
    )
}

export default RoomSelector
