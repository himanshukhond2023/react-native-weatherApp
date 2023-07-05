import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { deviceHeight, deviceWidth } from "../components/Dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";

const HomeScreen = () => {
    const [city, setCity] = useState("");

    const cities = [
        {
            id: 1,
            name: "Mumbai",
            image: require("../assets/images/image3.jpg")
        },
        {
            id: 2,
            name: "New York",
            image: require("../assets/images/image4.jpg")
        },
        {
            id: 3,
            name: "London",
            image: require("../assets/images/image5.jpg")
        },
        {
            id: 4,
            name: "San Francisco",
            image: require("../assets/images/image6.jpg")
        },
        {
            id: 5,
            name: "New Jersey",
            image: require("../assets/images/image7.jpg")
        }
    ];

    return (
        <View>
            <ImageBackground
                source={require("../assets/images/image2.jpg")}
                // style={{height: deviceHeight, width: deviceWidth}}
                // imageStyle={{opacity: 0.6, backgroundColor: "black"}} 
                style={styles.imageBackgroundStyle}
            />

            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Icon name="menu" size={46} color="white" />
                    <Image source={require("../assets/images/user.jpg")} style={styles.imageStyle} />
                </View>

                <View style={{paddingHorizontal: 20, marginTop: 100}}>
                    <Text style={styles.textStyle}>Hello Champ</Text>
                    <Text style={styles.searchText}>Search the city by name</Text>
                    
                    <View style={styles.subContainer1}>
                        <TextInput 
                            value={city}
                            onChangeText={(val) => setCity(val)}
                            placeholder="Search City" 
                            placeholderTextColor="white" 
                            style={styles.textInput}
                        />
                        <TouchableOpacity>
                            <Icon name="search" size={22} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textLocation}>My Location</Text>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={cities}
                        keyExtractor={(cities) => {
                            cities.id;
                        }}
                        renderItem={({item}) => {
                            return (
                                <Card name={item.name} image={item.image} />
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        height: deviceHeight,
        width: deviceWidth,
        opacity: 0.6,
        backgroundColor: "black",
    },
    container: {
        position: "absolute",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: deviceWidth - 20,
    },
    imageStyle: {
        height: 46,
        width: 46,
        borderRadius: 50
    },
    textStyle: {
        fontSize: 40,
        color: "white",
    },
    searchText: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
    },
    textInput: {
        paddingHorizontal: 10,
        color: "white",
        fontSize: 16,
    },
    subContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "white",
        marginTop: 10,
        paddingHorizontal: 10
    },
    textLocation: {
        color: "white",
        fontSize: 25,
        paddingHorizontal: 10,
        marginTop: 220,
        marginBottom: 20,
    }
});

export default HomeScreen;