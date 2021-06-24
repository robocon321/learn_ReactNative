import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
export default class App extends React.Component{  

  render(){
    const onPageScrollStateChanged = (e)=>{
      console.log(e)
    }

    const onPageSelected = (state)=>{
        console.log(state);
    }
    return (
      <PagerView style={styles.container} initialPage = {0} onPageSelected={onPageSelected} onPageScrollStateChanged={onPageScrollStateChanged}>
        <View key={0} style={{...styles.container, backgroundColor: "#32a852"}}>
          <Text>Screen 0</Text>
        </View>
        <View key={1} style={{...styles.container, backgroundColor: "#3c32a8"}}>
          <Text>Screen 1</Text>
        </View>
        <View key={2} style={{...styles.container, backgroundColor: "#a0a832"}}>
          <Text>Screen 2</Text>
        </View>
        <View key={3} style={{...styles.container, backgroundColor: "#a86132"}}>
          <Text>Screen 3</Text>
        </View>
      </PagerView>      
    )
  } 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})