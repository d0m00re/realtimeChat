import {SEND, SEND_SUCCESS, SEND_FAIL} from '../Constant';

export default function reducer(state = {}, action = {}) {
    switch(action.type){
        case SEND: {
            console.log('REDUCER SEND');
            return {
                ...state,
                isSending: true,
            }
        }
        default: {
            return state;
        }
    }
}