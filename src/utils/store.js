import { useReducer } from "react";

function stateHandler(state, action) {

    // if it is a function, allow to modify full state
    if( typeof action === 'function' ) {
        return action( state );
    }

    // update individual state
    if( typeof action === 'object' ) {
       return {
        ...state,
        ...action
       } 
    }

    return state
}

export default function useStore(initialState) {
    return useReducer(stateHandler, initialState)
}
