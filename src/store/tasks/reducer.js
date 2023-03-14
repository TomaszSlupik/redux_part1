import * as actionTypes from "./actionTypes"

let id = 0

export default function reducer(state = [], action) {
    if (action.type === actionTypes.ADD_TASK) {
        return [
            ...state,
            {
                id: ++id,
                task: action.payload.task,
                completed: false
            }
        ]
    } else if (action.type === actionTypes.REMOVE_TASK) {
        return state.filter(task => task.id !== action.payload.id)
    } else if (action.type === actionTypes.COMPLETED_TASK) {
        return state.map(el => el.id === action.payload.id ? {
                ...el,
                completed: true
            } :
            el)
    }

    return state
}