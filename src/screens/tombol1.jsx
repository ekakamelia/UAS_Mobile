// components/FoodMenu.js

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const FoodMenu = () => {

  // Dummy data for food items
  const foodData = [
    { id: '1', name: 'Tea Break', price: '25.000', image: require('../assets/teh.jpeg') },
    { id: '2', name: 'Hot Tea', price: '20.000', image: require('../assets/tea.jpg') },
    { id: '3', name: 'Boba', price: '30.000', image: require('../assets/boba.jpeg') },
    { id: '4', name: 'Banana Milkshake', price: '22.000', image: require('../assets/banana.jpg') },
    { id: '5', name: 'Taro Milkshake', price: '27.000', image: require('../assets/Taro.jpg') },
  ];

  // Render item function for FlatList
  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.foodItem}>
      <Image source={item.image} style={styles.foodImage} />
      <View style={styles.foodDetails}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>Rp {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        renderItem={renderFoodItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.foodList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  foodList: {
    paddingBottom: 20,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  foodPrice: {
    fontSize: 14,
    color: 'black',
  },
});

export default FoodMenu;
