import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../pages/DetailScreen';
import { RootStackParams } from './Tab1';
import SearchScreen from '../pages/SearchScreen';

const Tab2 = createStackNavigator<RootStackParams>();

const Tab2Screen = () => {
  return (
    <Tab2.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
        }}
    >
      <Tab2.Screen name="HomeScreen" component={SearchScreen} />
      <Tab2.Screen name='DetailScreen' component={DetailScreen} />
    </Tab2.Navigator>
  )
}

export default Tab2Screen