import { ADD_NEW_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes";

let newTaskId = 0;
export const addNewTask = (inputTextTask) =>{
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTextTask
    }
}

export const toggleTask = (taskId) =>{
    return {
        type: TOGGLE_TASK,
        taskId: taskId
    }
}

export const deleteTask = (taskId) =>{
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
}

export const editTask = (task) =>{
    return {
        type: EDIT_TASK,
        task: task
    }
}