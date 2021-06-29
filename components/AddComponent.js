import React from "react"; 
import { StyleSheet, View, TextInput, Image, TouchableHighlight } from "react-native";
import { connect } from 'react-redux'
import { addNewTask } from "../actions";

class AddComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newTaskName: ""
        }
    }

    render(){
        return (
            <View style={styles.addComponent}>
                <TextInput style={styles.textInput}
                            onChangeText={(text) =>{
                                this.setState({newTaskName: text})
                            }}
                />
                <TouchableHighlight   
                    activeOpacity={0.9}
                    underlayColor="#DDDDDD"
                    onPress={()=>{
                        var {newTaskName} = this.state;
                        if(!newTaskName.trim()) alert("Title task is not null") ;
                        else this.props.addNewTask(newTaskName);
                    }}>
                    <Image source={require("../assets/add.png")} style={styles.image}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addComponent: {
        flexDirection: "row",
        backgroundColor: "tomato",
        padding: 10
    },
    textInput:{
        fontSize: 20,
        width: 250,
        backgroundColor:"white",
        marginRight: 10
    },
    image:{
        width: 40,
        height: 40
    }
})

const  mapStateToProps = (state) =>{
    return {};
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        addNewTask: (inputText)=>{
            dispatch(addNewTask(inputText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent)