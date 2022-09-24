import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet,Text, SafeAreaView, View, Image, Button, Alert} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';
import AppText from './componnets/AppText.js';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function App() {

  return (
       <WelcomeScreen />
      // <ViewImageScreen />

     
      );
}



const styles = StyleSheet.create({

});
