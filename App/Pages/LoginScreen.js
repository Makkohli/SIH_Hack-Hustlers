import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Google Sign-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.emailButton]}>
          <Text style={styles.buttonText}>Email/Password</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue', // Blue color
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#0C7DE4', // Blue color
    elevation:8,
  },
  emailButton: {
    backgroundColor: '#0C7DE4', // Blue color
    elevation:8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
