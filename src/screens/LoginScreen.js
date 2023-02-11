import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import CountryPicker from "rn-country-picker";
import { Dimension,Orientation } from "../global_equipments/AllDimensions";
import Colors from "../global_equipments/AllColors";

const LoginScreen = () => {

    const [countryCode, setCountryCode] = useState("91");

    const selectedValue = (value) => {
        setCountryCode(value);
    };

    return (
        <View style={styles.container}>

            <Text style={{ color: Colors.white, backgroundColor: Colors.black, 
            padding: Dimension.eight }}>enter your phone number here</Text>

            <View style={{ flexDirection: Orientation.horizontal }}>
                <CountryPicker
                    disable={false}
                    animationType={"slide"}
                    language="en"
                    containerStyle={styles.pickerStyle}
                    pickerTitleStyle={styles.pickerTitleStyle}
                    selectedCountryTextStyle={styles.selectedCountryTextStyle}
                    countryNameTextStyle={styles.countryNameTextStyle}
                    pickerTitle={"Country Picker"}
                    searchBarPlaceHolder={"Search......"}
                    hideCountryFlag={false}
                    hideCountryCode={false}
                    searchBarStyle={styles.searchBarStyle}
                    countryCode={"91"}
                    selectedValue={selectedValue}
                />

                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="#000"
                    style={styles.inputStyle}
                />

                <Image
                    style={{
                        height: Dimension.twentyFour, width: Dimension.twentyFour,
                        alignSelf: 'center'
                    }}
                    source={require('../assets/right-arrow.png')}
                />
            </View>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F5FCFF",
    },
    titleText: {
        color: "#000",
        fontSize: 25,
        marginBottom: 25,
        fontWeight: "bold",
    },
    pickerTitleStyle: {
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
        fontWeight: "bold",
    },
    pickerStyle: {
        flex: 1,
        height: 54,
        width: 150,
        marginVertical: 10,
        borderColor: "#303030",
        alignItems: "center",
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: Dimension.eight,
        borderWidth: 2,
        fontSize: 16,
        color: "#000",
    },
    inputStyle: {
        flex: 3,
        height: 54,
        width: 150,
        marginVertical: 10,
        borderColor: "#303030",
        alignItems: "center",
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: Dimension.eight,
        borderWidth: 2,
        fontSize: 16,
        color: "#000",
    },
    selectedCountryTextStyle: {
        paddingLeft: 5,
        color: "#000",
        textAlign: "right",
    },

    countryNameTextStyle: {
        paddingLeft: 10,
        color: "#000",
        textAlign: "right",
    },

    searchBarStyle: {
        flex: 1,
    },
});