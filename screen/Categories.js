import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "Java"},
        {id: 4, name: "Javascript"},
        {id: 5, name: "Python"}
      ]
    }
  }
  render(){
    const {categories} = this.state;
    const {navigation} = this.props;
    return (
        <FlatList contentContainerStyle={{paddingLeft:16, paddingRight:16}} 
                  data={categories}
                  renderItem={({item}) => <CategoryListItem category={item} onPress={()=> navigation.navigate('Category')}/>}
                  keyExtractor={(item)=> `${item.id}`}
        />
      );
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
