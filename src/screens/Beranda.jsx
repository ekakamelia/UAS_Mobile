// components/Header.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const Header = ({navigation}) => {
  


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Jasa Kurir</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DRINK MENU")}>
          <Image
            source={require('../assets/vector.jpg')} // Ganti dengan path gambar Anda
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>JAS_DRINK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FOOD MENU")}>
          <Image
            source={require('../assets/vector.jpg')} // Ganti dengan path gambar Anda
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>JAS_FOOD</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2ecc71', // Background color for Tombol 1
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#2c3e50',
    marginTop: 5,
  },
});

export default Header;
