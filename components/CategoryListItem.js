import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import HtmlImage from '../assets/html.png';

export default function CategoryListItem(props){
    return <View>
        <Text>HTML</Text>
        <Image source={HtmlImage}/>
    </View>
}

