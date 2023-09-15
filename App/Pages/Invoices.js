// import { View, Text, Button, StyleSheet,Image} from 'react-native'
// import React from 'react'
// import Header from '../Components/Header'
// import Searchbar from '../Components/Searchbar'


// export default function Home() {
//   return (
//     <View>
//     <Searchbar/>
//     <Image source={require('./../Assets/Images/login.png')}
//     style={styles.image}
//     />
//     <Header/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({

//   image: {
//     width: 40,
//     height: 40,
//     borderRadius: 100,
//     alignSelf: 'flex-start',
//   },
// })

import { StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native';


const Invoices = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
       {/* <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      /> */}
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateBill')}
      >
        <Text style={styles.text}>Create Bill</Text>
      </TouchableOpacity>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo : {
      width : 100,
      height:100
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0C7DE4",
      padding: 10,
      borderRadius:7,
      elevation:8,
    },
    text:{
      color:'#fff',
    },
  });
 
export default Invoices;