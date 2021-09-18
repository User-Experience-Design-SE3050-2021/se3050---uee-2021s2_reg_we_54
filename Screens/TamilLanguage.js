import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

const TamilLanguage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Tamil Learning</Text>

        </View>
    );
};

export default TamilLanguage;

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: "#FFB4B4",
    }
});