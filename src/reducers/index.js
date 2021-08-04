import { combineReducers } from 'redux';

const initState = {
    count: 0,
}

const count = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                count: ++state.count
            }
        case 'JIAN':
            return {
                count: --state.count
            }
        default:
            return state;
    }
}

export default combineReducers({
    count,
})