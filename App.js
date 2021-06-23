import React from 'react';
import { StyleSheet, View, ImageBackground, Text} from 'react-native';

export default class App extends React.Component{  

  render(){
    const image = {uri:"https://reactjs.org/logo-og.png"}
    return (
      <View  style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text  style={styles.text}>Hello world</Text>
        </ImageBackground>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent:"center"
  },
  text:{
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"    
  }
})