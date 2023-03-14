import * as actionTypes from "./actionTypes"


export const addTask = (yourTask) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: {
            task: yourTask
        }
    }
}

export const removeTask = (yourTask) => {
    return {
        type: actionTypes.REMOVE_TASK,
        payload: {
            id: yourTask
        }
    }
}

export const completeTask = (yourTask) => {
    return {
        type: actionTypes.COMPLETED_TASK,
        payload: {
            id: yourTask
        }
    }
}