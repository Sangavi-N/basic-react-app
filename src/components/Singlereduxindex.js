import React,{ Component } from 'react'
const redux = require('redux');
// 1. Create a basic Reducer
const rootReducer = ( currentState = 0, action ) => { 
    // return currentState;
    switch(action.type){
        case 'increment5':
            return currentState+5;
        case 'increment10':
            return currentState+10;
        case 'increment100':
            return currentState+100;
        default:
            return currentState;
    }
};

// 2. create a store
const store = redux.createStore( rootReducer );
console.log("store.getState() is", store.getState());

store.dispatch({ type:'increment100' });
console.log("store.getState() after dispatch is", store.getState());

class Singlereduxindex extends Component{
    render(){
        return(
            <div>
                <h1>{store.getState()}</h1>
            </div>
        )
    }
}

export default Singlereduxindex