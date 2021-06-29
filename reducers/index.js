import { combineReducers } from 'redux'
import taskListReducers from "./taskListReducers"

const allReducers = combineReducers({
  tasks: taskListReducers
})

export default allReducers;