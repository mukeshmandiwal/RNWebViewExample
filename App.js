import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/RootScreen';
import WebToNative from './src/screens/WebToNative';
import NativeToWeb from './src/screens/NativeToWeb';
import WebViewUI from './src/screens/WebView';

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
            name="WebViewUI"
            component={WebViewUI}
            options={{
              headerTintColor: 'green',
              title: 'WebViewUI',
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
          <Stack.Screen
            name="NativeToWeb"
            component={NativeToWeb}
            options={{
              headerTintColor: 'green',
              title: 'NativeToWeb',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
