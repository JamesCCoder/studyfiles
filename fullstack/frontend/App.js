import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableWithoutFeedback } from 'react-native';
import axios from "axios";

export default function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const pressHandler = () =>{
    const register = {
      username: userName,
      password: passWord,
    }
    axios.post("http://localhost:9000/user", register);
    setUserName("");
    setPassWord("");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder='username' onChangeText={text => setUserName(text)}/>
      <TextInput style={styles.input} placeholder="password" onChangeText={text => setPassWord(text)}/>
      <TouchableWithoutFeedback onPress={pressHandler}>
          <View style={styles.button}>
            <Text style={styles.text}>add</Text>
          </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:"grey",
    width:140,
    height:30,
    margin:10,
  },
  button:{
     borderColor:"red",
     borderWidth:1,
     width:100,
     margin:10,
     height:30,
     backgroundColor:"green",
     justifyContent:"center",
     alignItems:"center",
  },
  text:{
     color:"white"
  },
});
