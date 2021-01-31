import {SEND, SEND_SUCCESS, SEND_FAIL, NEW_MESSAGE} from '../Constant';

export default function reducer(state = {}, action = {}) {
    console.log('-------------');
    console.log(state);
    console.log(action);
    console.log('|||||||||||||');
    
    
    
    
    switch(action.type){
        case SEND: {
            console.log('REDUCER SEND');
            return {
                ...state,
                isSending: true,
            }
        }
        case NEW_MESSAGE: {
            console.log('NEW MESSAGE');
            console.log(action);
            
            
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}