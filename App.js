import React from 'react';
import { StyleSheet, View} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from "./reducers/index";
import TaskManageComponent from "./components/TaskManageComponent"

const store = createStore(allReducers);
export default class App extends React.Component{  
  render(){
    return (
      <Provider store={store}>
          <TaskManageComponent/>
      </Provider>
    )
  } 
}
