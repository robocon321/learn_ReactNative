import React from 'react';
import { StyleSheet, View, Text, FlatList, Image} from 'react-native';
import data from './data/db';

class FlatListItem extends React.Component{
  render(){
    const {item, index} = this.props;
    const style = {
      flex: 1,
      flexDirection: "row",
      backgroundColor: index % 2 == 0 ? "#ffeeed" : "#edfff5",
      paddingVertical: 10,
      paddingLeft: 10,
      justifiContent: "center", 
      alignItems: "center"
    }
    return (
      <View {...style}>
        <Image source={{uri: item.image}} style={styles.image}/>
        <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.describe}</Text>
        </View>
      </View>
    )
  }
}
export default class App extends React.Component{  
  render(){
    return (
      <View style={styles.container}>
        <FlatList data={data}
                  renderItem={({item, index})=>(
                    <FlatListItem item={item} index={index} />
                  )}
                  keyExtractor={(item)=> `${item.id}`}
        />
      </View>    
    )
  } 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:30,
  },
  title:{
    fontSize: 20,
    fontWeight:"bold"
  }, 
  image:{
    marginRight:10,
    width: 50,
    height: 50
  }
})