import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity, TouchableOpacityBase } from 'react-native';
import axios from "axios";

export default function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const addHandler = () =>{
     const register = {
       username: userName,
       password: passWord,
     }
     axios.post("http://localhost:9012/user", register);
     setUserName("");
     setPassWord("");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="username" value={userName} onChangeText={text => setUserName(text)}/>
      <TextInput style={styles.input} placeholder="password" value={passWord} onChangeText={text => setPassWord(text)}/>
      <TouchableOpacity onPress={addHandler}>
          <View style={styles.textcover}>
             <Text style={styles.text}>add</Text>  
          </View> 
      </TouchableOpacity>
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
    borderColor:"red",
    borderWidth:1,
    width:200,
    padding:7,
    margin:5,
    borderRadius:10,
  },
  textcover:{
    backgroundColor:"black",
    padding:10,
    marginTop:15,
    borderRadius:10,
  },
  text:{
    color:"white",
  },
});
