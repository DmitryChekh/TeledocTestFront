
import { GET_FOUNDER, CREATE_FOUNDER, FETCH_FOUNDERS, DELETE_FOUNDER, UPDATE_FOUNDER } from "./actions"

const initialState = {
    founders: []
}

export const founderReducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FOUNDER:
            console.log(action.payload)
            return {...state, founders: state.founders.map( item => {
                if(item.founderId == action.payload.founderId) {
                    return action.payload
                }
                return item;
            })}
        case GET_FOUNDER:
            return {...state, founders: action.payload}
        case CREATE_FOUNDER:
            return { ...state, founders: state.founders.concat([action.payload]) }
        case FETCH_FOUNDERS:
            return { ...state, founders: action.payload.data }
        case DELETE_FOUNDER:
            console.log(action.payload)
            return { ...state, founders: state.founders.filter(item => item.founderId !== action.payload) }
        default: return state
    }
}