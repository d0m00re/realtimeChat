import React from 'react'
import Typography from '@material-ui/core/Typography';

import Chat from './../components/Chat/Chat';
const Home = () => {
    return (
        <div>
            <Typography variant={'h1'}>
                REAL TIME CHAT
            </Typography>

            <Chat />
        </div>
    )
}

export default Home
