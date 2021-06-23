import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export default class App extends React.Component{
  
  render(){
    
    return(
      <View style={styles.container}>
          <View style={styles.activityIndicator}>
            <ActivityIndicator color="blue" size="large"/>
            <ActivityIndicator color="purple" size="small" />            
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16
  },
  activityIndicator:{
    flex: 1,
    flexDirection: "row"
  }
});
