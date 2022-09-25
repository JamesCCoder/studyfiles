import React,{useState} from "react";
import {View, StyleSheet, SafeAreaView, TextInput, Text} from "react-native";

const App = () => {
  const [value, setValue] = useState("");
  return ( 
    <SafeAreaView>
      <Text>{value}</Text>
       <TextInput style={styles.input} 
                  placeholder="First Name"
                  onChangeText={(text) => setValue(text)}
                  keyboardType="numeric"
                  />
    </SafeAreaView>
   );
}

const styles = StyleSheet.create({
  container:{

  },
  input:{
    borderBottomColor:"grey",
    borderBottomWidth:1,
  }
})
 
export default App;