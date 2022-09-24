import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet,Text, SafeAreaView, View, Image, Button, Alert} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';

export default function App() {
  const [value, setValue] = useState("this is text");

   
  return (

       <WelcomeScreen />

  );
}



const styles = StyleSheet.create({

});
