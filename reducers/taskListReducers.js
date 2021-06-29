import {ADD_NEW_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK} from "../actions/actionTypes"

export default taskListReducer = (state = [], action)=>{
    switch(action.type){
        case ADD_NEW_TASK:
            state.push({
                id: action.taskId,
                taskName: action.taskName,
                completed: false
            })
            return [...state];
        case TOGGLE_TASK:
            state = state.map((task)=>{
                return {
                    ...task,
                    completed: task.id == action.taskId ? !task.completed : task.completed
                }
            })
            return [...state];
        case DELETE_TASK: 
            state = state.filter((item) =>{
                return item.id != action.taskId
            })
            return [...state];
        case EDIT_TASK:
            state = state.map((task) =>{
                return  task.id == action.task.id ? action.task : task
            })
            return [... state]
        default: return state;
    }
}