import React from "react";
import {View, StyleSheet, Image} from "react-native";

const ViewImageScreen = () => {
    return ( 
        <View style={styles.background}>
           <View style={styles.closeIcon}></View>
           <View style={styles.deleteIcon}></View>
           <Image 
           resizeMode="contain"
           style={styles.container} 
           source={require("../../assets/chair.jpg")}>
           </Image>
        </View>

     );                                                       
}

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height:'100%',
    },
    background:{
       flex:1,
       backgroundColor:"black",
    },
    closeIcon:{
       height:50,
       width:50,
       backgroundColor:"pink",
       position:"absolute",
       top:40,
       left:40,
    },
    deleteIcon:{
       height:50,
       width:50,
       backgroundColor:"lightgreen",
       position:"absolute",
       top:40,
       right:40,
    }
})
 
export default ViewImageScreen;