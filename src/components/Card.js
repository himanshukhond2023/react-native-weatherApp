import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { deviceHeight, deviceWidth } from "./Dimensions";

const Card = ({name, image}) => {
    return (
        <TouchableOpacity style={styles.touchableOpacityContainer} onPress={() => {}}>
            <ImageBackground source={image} style={styles.imageBackground}/>
            
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>


    );
};

const styles = StyleSheet.create({
    touchableOpacityContainer: {
        marginHorizontal: 10,
    },
    imageBackground: {
        height: deviceHeight / 5,
        width: deviceWidth / 2 - 50,
        borderRadius: 16,
    },
    container: {
        position: "absolute",
        height: "100%",
        width: "100%"
    },
    name: {
        fontSize: 22,
        width: "100%",
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        color: "black"
    }
});

export default Card;