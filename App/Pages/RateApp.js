import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RateApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RateApp</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.starButton]}>
          <Text style={styles.buttonText}>⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.starButton]}>
          <Text style={styles.buttonText}>⭐⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.starButton]}>
          <Text style={styles.buttonText}>⭐⭐⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.starButton]}>
          <Text style={styles.buttonText}>⭐⭐⭐⭐</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.starButton]}>
          <Text style={styles.buttonText}>⭐⭐⭐⭐⭐</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Light gray background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#007BFF', // Blue color
    shadowColor: 'rgba(0, 123, 255, 0.5)', // Shadow color
    shadowOpacity: 0.7, // Shadow opacity
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowRadius: 4, // Shadow radius
    elevation: 3, // Android shadow
  },
  starButton: {
    backgroundColor: '#007BFF', // Blue color
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default RateApp;
