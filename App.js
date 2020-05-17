import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/RootScreen';
import WebToNative from './src/screens/WebToNative';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTintColor: 'green',
              title: 'Home',
            }}
          />
          <Stack.Screen
            name="WebToNative"
            component={WebToNative}
            options={{
              headerTintColor: 'green',
              title: 'WebToNative',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
