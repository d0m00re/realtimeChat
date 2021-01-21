import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import {
  UPDATE_USERNAME, 
} from './../../../context/Constant';
const FormCreateUser = () => {

  const state= useSelector(state => state.game)
  const dispatch = useDispatch(); 

    //const [username, setUsername] = useState('');

    const handleUsername = (event) => {
      //setUsername(event.target.value);
      console.log({type : UPDATE_USERNAME, payload : event.target.value });
      dispatch({type : UPDATE_USERNAME, payload : event.target.value });
    }

    return (
        <>
          <TextField label="username" type="text" value={state.username} onChange={handleUsername} />
          <Button variant='contained'>CREATE USER</Button>
        </>
    )
}

export default FormCreateUser;
