import React from "react"
import { StyleSheet,View, FlatList, Modal, TextInput, Button, TouchableWithoutFeedback } from "react-native"
import {connect} from "react-redux"
import {toggleTask, editTask} from "../actions/index"
import TaskItemComponent from "./TaskItemComponent"

class TaskListComponent extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            isShowModal: false,     
            task: {
                id: -1, 
                taskName: "",
                completed: false
            }
        }
    }

    onShowModal = (task)=>{
        this.setState({
            isShowModal: !this.state.isShowModal,
            task: task
        })
    }
    render(){
        const {isShowModal, task} = this.state;
        return (
            <View>
                <FlatList 
                        data={this.props.tasks}
                        renderItem = {({item,index}) =>{
                            return <TaskItemComponent task={item} onShowModal={this.onShowModal}/>
                        }}
                        keyExtractor={(item)=> `${item.id}`}
                />
                <Modal 
                        animationType="slide"
                        transparent={true}
                        visible={isShowModal}                        
                >
                    <View style={styles.wrapModal}>
                        <View style={styles.modal}>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText={(text) =>{
                                    this.setState({
                                        isShowModal: true,
                                        task: {
                                            ...task,
                                            taskName: text
                                        }
                                        
                                    })
                                }}
                                value={task.taskName}/>
                            <View style={styles.wrapBtnModal}>
                                <Button title="Cancel" style={styles.btnModal} color="#ffbe0d" onPress={()=>{                                    
                                    this.setState({
                                        isShowModal: false,
                                        task: {
                                            id: -1,
                                            taskName: "",
                                            completed: false
                                        }
                                    })
                                }}/>
                                <Button title="Ok" style={styles.btnModal}  color="#ffbe0d" onPress={()=>{
                                    this.props.onEditTask(task);
                                    this.setState({
                                        isShowModal: false,
                                        task: {
                                            id: -1,
                                            taskName: "",
                                            completed: false                                            
                                        }
                                    })
                                }}/>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )    
    }
}

const styles = StyleSheet.create({
    wrapModal:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",    
    },
    modal:{
        width: "60%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        borderRadius: 10  
    },
    textInput:{
        width: '100%',
        padding: 5,
        color: "#808080",
        borderColor: "#b8b8b8",
        borderWidth: 1,
        borderStyle: "solid"
    },
    wrapBtnModal: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        margin: 5
    },
    btnModal:{
        padding: 10,
        width: 80
    }
})

const mapStateToProps = (state)=>{
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
        onToggleTask: (taskId)=>{
            dispatch(toggleTask(taskId))
        },
        onEditTask: (task) =>{
            dispatch(editTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)

