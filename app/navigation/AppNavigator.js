import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';

import Home from '../components/Home';
import Profile from '../components/Profile';
import Search from '../components/Search';
import Friends from '../components/Friends';
import { StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={HomeScreen}
        name='Home'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'people-sharp' : 'people-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={Friends}
        name='Friends'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'search' : 'search-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={Search}
        name='Search'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'person' : 'person-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={Profile}
        name='Profile'
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
