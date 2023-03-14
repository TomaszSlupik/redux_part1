import { addTask } from "./action"

export const fetchToDo = () => {
    return async function(dispatch, getState) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const task = await res.json()
        console.log(task)
        dispatch(addTask(task.title))
    }
}