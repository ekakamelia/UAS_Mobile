import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Beranda from './screens/Beranda';
import Setelan from './screens/Setelan';
import Akun from './screens/Akun';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{
        taBarLabel: 'Beranda',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home-account" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Setelan" component={Setelan} options={{
        taBarLabel: 'Setelan',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Akun" component={Akun} options={{
        taBarLabel: 'Akun',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Tabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})