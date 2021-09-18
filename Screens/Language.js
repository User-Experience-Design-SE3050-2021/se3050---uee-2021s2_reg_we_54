import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Language = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Language Learning</Text>
            <Button title="English" onPress={() => navigation.navigate("EnglishLanguage")} />
            <Button title="Sinhala" onPress={() => navigation.navigate("SinhalaLanguage")} />
            <Button title="Tamil" onPress={() => navigation.navigate("TamilLanguage")} />
        </View>
    );
};

export default Language;

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: "#C1F6D3",
    }
});
