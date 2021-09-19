import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from 'react-native-elements';
import bars from 'react-native-vector-icons/FontAwesome';

const Language = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>

            <Text style={styles.heading}>Language Learning</Text>
            <Button title="English" icon={{
                name: "g-translate",
                size: 15,
                color: "white",
                iconPosition: 'left'
            }}
                buttonStyle={styles.button1} onPress={() => navigation.navigate("English Learning")} />
            <Button title="Sinhala" icon={{
                name: "g-translate",
                size: 15,
                color: "white",
                iconPosition: 'left'
            }}
                buttonStyle={styles.button2} onPress={() => navigation.navigate("Sinhala Learning")} />
            <Button title="Tamil" icon={{
                name: "g-translate",
                size: 15,
                color: "white",
                iconPosition: 'left'
            }} buttonStyle={styles.button3} onPress={() => navigation.navigate("Tamil Learning")} />
        </View>
    );
};

export default Language;

const styles = StyleSheet.create({

    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: "#C1F6D3",
    },
    button1: {
        borderRadius: 10,
        backgroundColor: '#67666D',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        fontSize: 40,
        marginRight: 50,
    },
    button2: {
        borderRadius: 10,
        backgroundColor: '#3CBBEE',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    button3: {
        borderRadius: 10,
        backgroundColor: '#EF7A7A',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    buttonText: {

    }
});
