import React from "react";
import AppText from "./AppText";
import {View, StyleSheet} from "react-native";

const AppButton = ({onPress, text, color}) => {
    return ( 
        <View style={[styles.button,{backgroundColor:color}]} onPress={onPress}>
           <AppText>{text}</AppText>
        </View>
     );
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:45,
        margin:10,
        borderRadius:50,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
    },
})
 
export default AppButton;