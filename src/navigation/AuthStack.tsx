import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';
import SignIn from '../screens/Login/SignIn';
import Login from '../screens/Login/Login';
import Signup from '../screens/SignUp/Signup';
import MobileVerification from '../screens/OtpVerification/MobileVerification';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Language from '../screens/Language/Language';
const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
  
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileVerification"
        component={MobileVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
