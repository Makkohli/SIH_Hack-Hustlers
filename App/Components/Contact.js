import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>contact@example.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoText}>(+91) 123457891</Text>
      </View>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
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
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555', // Gray text color
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
    color: '#333', // Dark gray text color
  },
  contactButton: {
    backgroundColor: '#007BFF', // Blue color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
