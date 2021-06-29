import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Animated, Image } from "react-native"
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { connect } from "react-redux";
import {deleteTask, toggleTask} from "../actions/index"

class TaskItemComponent extends React.Component{
renderRightAction = (progress, dragX) => {
    const trans = dragX.interpolate({
        inputRange: [-80, 0],
        outputRange: [0, 80],
    });
    return (
        <RectButton style={styles.rightAction} onPress={this.close}>
        <Animated.View
            style={[styles.containerAnimate,{transform: [{ translateX: trans }]}]}>
            <TouchableOpacity onPress={() =>{
                    this.props.onShowModal(this.props.task);
                }}>
                <Image style={styles.image} source={require("../assets/edit.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                    this.props.onDeleteTask(this.props.task.id)
                }}>
                <Image style={styles.image} source={require("../assets/delete.png")}/>
            </TouchableOpacity>
        </Animated.View>
        </RectButton>
    );
};
      
    render(){
        return (
            <Swipeable renderRightActions={this.renderRightAction}>
                <TouchableOpacity activeOpacity={0.2} onPress={()=>{
                    this.props.onToggleTask(this.props.task.id)
                }}>
                    <View style={styles.taskItem} >
                        <Text style={[this.props.task.completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', opacity: 0.2} : {},styles.title]}>{this.props.task.taskName}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        )
    }
}

const styles = StyleSheet.create({
    taskItem:{
        padding:10,
        justifyContent:"center",
        height: 40,
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1
    },
    title:{
        fontSize: 15
    },
    containerAnimate:{
        flexDirection: "row",
        width: 80,
        height: '100%',
        justifyContent:"space-between",
        alignItems: "center",
    },
    image: {   
        width: 30,
        height: 30,
        marginHorizontal: 5
    }
})

const mapStateToProps = (state) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteTask: (id) =>{
            dispatch(deleteTask(id))
        },
        onToggleTask: (id) =>{
            dispatch(toggleTask(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItemComponent)