//storee : dispatach and getState

// we neeecd to return a fucnt5ion from this function why???????
const loggerMiddleware = (store) => {
    return (next) => {
        // return one fucntion who recevie our action
        return (action) => {
            console.group(action.type);
            console.log('Action: ', action);
            console.log('Previous state : ', store.getState());
            const result = next(action); // perform dispatch
            console.log('Next state : ', store.getState());
            
            console.groupEnd(action.type);
            console.log(result);
            return (result);
            
        }
    };
}

export default loggerMiddleware;

// redux execute chacune de ces foncvtion sequentoielemetn et peut ainsi determiner la fin du middleware
// 