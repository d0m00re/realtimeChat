//https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/clientMiddleware.js
// midleware intercepter une action avant de taper dans le reducerer
export default function socketMiddleware(socket) {
// hoc function --> inject dispatch and getState  when we call it
// une fois call (next) => action => {...}
// une fois recall (action => {...})\
// next c est une va etre call depuis l exterieur avec une fonction definis
// action ????
  return ({ dispatch, getState }) => (next) => (action) => {
    // action est une function
    console.log('socket io middleware');
    if (typeof action === "function") {
        console.log('it s a function dude!');
      return action(dispatch, getState);
    }
    // dans le cas ou action  n est pas une fonction
    //

    /*
     * Socket middleware usage.
     * promise: (socket) => socket.emit('MESSAGE', 'hello world!')
     * type: always 'socket'
     * types: [REQUEST, SUCCESS, FAILURE]
     */
    const { promise, type, types, ...rest } = action;

    if (type !== "socket" || !promise) {
      // Move on! Not a socket request or a badly formed one.
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    console.log({ ...rest, type: REQUEST });
    next({ ...rest, type: REQUEST });
    console.log('socket ; ');
    console.log(socket);
    return promise(socket)
      .then((result) => {
        return next({ ...rest, result, type: SUCCESS });
      })
      .catch((error) => {
        return next({ ...rest, error, type: FAILURE });
      });
  };
}
