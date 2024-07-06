// components/ServiceList.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServiceList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Layanan Kami</Text>
      <Text style={styles.title}>- Pengiriman Dokumen</Text>
      <Text style={styles.title}>- Pengiriman Paket</Text>
      <Text style={styles.title}>- Pengiriman Barang Berharga</Text>
      <Text style={styles.title}>- Layanan Darurat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
});

export default ServiceList;
