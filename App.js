import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

export default class App extends React.Component{  
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text>The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.</Text>
          <Button title="Press" style={styles.button} />
        </View>
        <Separate />
        <View style={styles.wrap}>
          <Text>Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.</Text>
          <Button title="Press" color="#f194ff" style={styles.button}/>
        </View>
        <Separate />
        <View style={styles.wrap}>
          <Text>All interaction for the component are disabled.</Text>
          <Button title="Press" color="#f194ff" disabled style={styles.button}/>
        </View>
        <Separate />
        <View style={styles.wrap}>
          <Text>This layout strategy lets the title define the width of the button.</Text>
          <View  style={styles.child}>
            <Button title="Left" />
            <Button title="Right" />
          </View>
        </View>
      </View>
    )
  }  
}

const Separate = ()=>{
  return <View style={styles.separate}/>
}

const styles = StyleSheet.create({
  separate:{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  wrap:{

  },
  button:{
    paddingTop:50
  },
  child: {
    flexDirection:"row",
    justifyContent: "space-between"
  }
})