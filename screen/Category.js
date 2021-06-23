import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Category extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {route} = this.props;
    return (
        <View>
          <Text>{route.params.item.name}</Text>
        </View>
      );
  }

  componentDidMount(){
    const {route, navigation} = this.props;
    navigation.setOptions({
      title: route.params.item.id
    })    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16
  },
});
