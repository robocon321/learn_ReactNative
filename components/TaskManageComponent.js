import React from "react";
import TaskListComponent from "./TaskListComponent"
import AddComponent from "./AddComponent"
import { View } from "react-native";

export default class TaskManageComponent extends React.Component{
    render(){
        return (
            <View style={{
                flex:1, 
                flexDirection: "column"}
            }>
                <AddComponent />
                <TaskListComponent />
            </View>
        )
    }
}