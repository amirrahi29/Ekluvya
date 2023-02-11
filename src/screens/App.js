import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import OTPScreen from './OTPScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;