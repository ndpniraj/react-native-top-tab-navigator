import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import AnotherScreen from '../components/AnotherScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name='Home' />
      <Stack.Screen component={AnotherScreen} name='AnotherScreen' />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
