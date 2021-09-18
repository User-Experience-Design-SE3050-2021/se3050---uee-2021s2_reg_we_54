import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

const SinhalaLanguage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Sinhala Learning</Text>

        </View>
    );
};

export default SinhalaLanguage;

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: "#BBEBFF",
    }
});