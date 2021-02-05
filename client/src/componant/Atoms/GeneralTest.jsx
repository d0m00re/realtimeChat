import React from 'react'

import {useReducer, useDispatch} from 'react-redux';

import Button from '@material-ui/core/Button';
const GeneralTest = () => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <Button onClick = {() => dispatch({type : 'coucou', payload : {age : 18, name : 'jackouille'}})}>
                Test Redux
            </Button>
        </div>
    )
}

export default GeneralTest
