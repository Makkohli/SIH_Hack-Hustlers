import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { TextInput } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <Ionicons name="search" size={24} 
        color={Colors.gray} style={{marginRight:10}} /> 
        <TextInput placeholder='Search' style={{flex:1}}/>
    </View>
  )
}
// const styles = StyleSheet.create({
//     container:{
//         width: '100%',
//          display:'flex',
//          flexDirection:'row',
//         backgroundColor:'#fff',
//          padding:10,
//     borderRadius:10,
//      elevation:2,
//      marginTop:10,
     
//     // alignItems:'flex-start',
//     alignItems:'stretch',
//     }
// })


const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 5, // Reduce vertical padding
    paddingHorizontal: 10, // Reduce horizontal padding
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    alignItems: 'stretch',
  }
})






