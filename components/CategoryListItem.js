import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import HtmlImage from '../assets/html.png';

export default function CategoryListItem(props){
    const {category} = props;

    return (
        <View style={styles.categoryView}>
            <Text style={styles.categoryText}>{category.name}</Text>
            <Image style={styles.categoryImage} source={HtmlImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryImage:{
        width: 64,
        height: 64
    },
    categoryText:{
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryView:{
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        elevation: 3,
        // background color must be set
        // shadow attribute not working on Android 
        backgroundColor : "white", // invisible color
        marginBottom: 16
    }
})