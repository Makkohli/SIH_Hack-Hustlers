import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Container */}
      <View style={styles.content}>
        
        {/* <Text style={styles.text}>Hello,gjhgjg</Text>
        <Text style={styles.text}>Manish kohli</Text>
        <View style={styles.spacer}></View>
        <Image
          source={require('./../Assets/Images/login.png')}
          style={styles.image}
        /> */}
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // paddingTop: 20, // Ensure there's some top padding
    justifyContent:'space-between',

  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items at the top
    paddingHorizontal: 16,
  },
  text: {
    marginRight: 'auto', // Push text to the start (left)
    justifyContent:'flex-start',
  },
  spacer: {
    flex: 1, // Expand and occupy available space
    alignSelf: 'flex-start',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
});

export default App;
