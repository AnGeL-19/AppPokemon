import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import { SimplePokemon } from '../interfaces/IPokemon';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {simplePokemon: SimplePokemon, color: string}
}

const Tab1 = createStackNavigator<RootStackParams>();

const Tab1Screen = () => {
  return (
    <Tab1.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
        }}
    >
      <Tab1.Screen name="HomeScreen" component={HomeScreen} />
      <Tab1.Screen name='DetailScreen' component={DetailScreen} />
    </Tab1.Navigator>
  )
}

export default Tab1Screen