import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet,Text, SafeAreaView, View, Image, Button} from 'react-native';

export default function App() {
  const [value, setValue] = useState("this is text");
  const pressHandler = () =>{
    console.log("af");
  }
  const longPressHandler = () =>{
     console.log("long");
  }
  return (
    <SafeAreaView style={styles.container}>
       <Button style={styles.img} title={value} color="#f194ff"/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
  },
  img:{

  }
});
