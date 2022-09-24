import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

const WelcomeScreen = () => {
    return ( 
          <ImageBackground
           style={styles.background}
           source={require("../../assets/hotel.jpg")}
        >
           <View style={styles.logoPosition}>
              <Image style={styles.logo} source={require("../../assets/logo-red.png")}/>
              <Text style={styles.word}>Sell what you don't need</Text>
           </View>
      
            <View style={styles.login}></View>
            <View style={styles.register}></View>
          </ImageBackground>



     );
}

const styles = StyleSheet.create({
      background:{
          flex:1,
          justifyContent:"flex-end",
      },
      login:{
          width:"100%",
          height:70,
          backgroundColor:"red",
      },
      register:{
          width:"100%",
          height:70,
          backgroundColor:"orange",
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
          color:"white",
          marginTop:20,
          fontSize:20,
      }
})
 
export default WelcomeScreen;