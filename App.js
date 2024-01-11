import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import SearchScreen from './screens/searchScreen';
import CartScreen from './screens/cartScreen';
import ProductDetailsScreen from './screens/productDetailsScreen';
import CategorieScreen from './screens/categorieScreen';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <AntDesign name="home" size={24} color="black" />
    </View>
  ),
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  }
};

const App = () => { 

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="CategorieScreen" component={CategorieScreen} />
        
      </Stack.Navigator>
    );
  };
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign name="search1" size={24} color="black" />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Cart" component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
