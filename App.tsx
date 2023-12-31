/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigator/Tabs';

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


export default App;
