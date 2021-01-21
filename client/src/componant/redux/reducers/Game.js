import {
  UPDATE_FINAL_MAP,
  UPDATE_TMP_MAP,
  UPDATE_TETRIMINOS_POS,
  TETRI_ROTATION,
  UPDATE_USERNAME,
  UPDATE_ROOM,
} from "../Constant";

const tetriBlue = [
    [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,1],
        [0,1,0],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,0,1],
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,0],
    ],
  ]

const initialState = {
    currentKey: "",
    username: "d0m",
    roomname: '',
    currRotation: 0,
    currTetriminos: { 
      color :'blue',
      tetri : tetriBlue
    },
  
    posTetriminos: { x: 5, y: -1 },
    currMap: Array(20)
      .fill()
      .map(() => Array(10).fill(0)),
    tmpMap: Array(20)
      .fill()
      .map(() => Array(10).fill(0)),
  };
  

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FINAL_MAP:
      // check delete line
      return {
        ...state,
        currMap: action.payload,
        posTetriminos: { x: 5, y: -1 },
      };
    case UPDATE_TMP_MAP:
      return {
        ...state,
        tmpMap: action.payload.tmpMap,
        posTetriminos: action.payload.pos,
      };
    case UPDATE_TETRIMINOS_POS:
      return {
        ...state,
        currPosTetriminos: { x: action.payload.x, y: action.payload.y },
      };
    case TETRI_ROTATION:
      console.log("rotation : ");
      console.log(action.payload);
      return {
        ...state,
        currRotation: action.payload,
      };

    case UPDATE_USERNAME:
      //go perform axios request for saving user
      console.log("username: ");
      return {
        ...state,
        username: action.payload,
      };

    case UPDATE_ROOM:
      console.log("udpate room : " + action.payload);
      return {
        ...state,
        roomname: action.payload,
      };

    default:
      console.log(UPDATE_USERNAME);
      return state;
  }
};

export default GameReducer;