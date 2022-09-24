import React,{useState} from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../../componnets/AppButton";

const WelcomeScreen = () => {
    const [login, setLogin] = useState("Login");
    const [register, setRegister] = useState("Register");
    const pressHandler = () =>{
      console.log(register);
    }
    return ( 
          <ImageBackground
          blurRadius={10}
           style={styles.background}
           source={require("../../assets/background.jpg")}
        >
           <View style={styles.logoPosition}>
              <Image style={styles.logo} source={require("../../assets/logo-red.png")}/>
              <Text style={styles.word}>Sell what you don't need</Text>
           </View>

            <View style={styles.buttonContainer}>
              <AppButton color={"red"} text={login} onPress={() => pressHandler()}/>
              <AppButton color={"orange"} text={register} onPress={() => pressHandler()}/>
            </View>

          </ImageBackground>



     );
}

const styles = StyleSheet.create({
      background:{
          flex:1,
          justifyContent:"flex-end",
      },
      logo:{
          height:100,
          width:100,

      },
      logoPosition:{
          position:"absolute",
          top:70,
          alignItems:"center",
          width:"100%",
      },
      word:{
          color:"black",
          marginTop:20,
          fontSize:30,
      },
      buttonContainer:{
          alignItems:"center",
          justifyContent:"center",
          padding:20,
      }
})
 
export default WelcomeScreen;