import React from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from 'react-native-elements';
import bars from 'react-native-vector-icons/FontAwesome';

const image = { uri: "https://i.ibb.co/cD6gVHY/18048180.jpg" };


const WordDetails = ({ route, navigation }) => {

    const { title, imageUrl, description } = route.params;
    console.log(imageUrl)
    return (
        <SafeAreaView>
            <Text style={styles.heading}>{title}</Text>
            <Image
                style={styles.image}
                source={{
                    uri: imageUrl,
                }}
            />
            <Text style={styles.description}>{description}</Text>
        </SafeAreaView>
    );
};

export default WordDetails;

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 220,
        height: 220,
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 70,
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
        marginTop: 0,
    },
    description: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20,
    },
    MainContainer: {
        flex: 1,
    },
    button1: {
        borderRadius: 10,
        backgroundColor: '#007FB3',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        fontSize: 40,
        marginRight: 50,
    },
    button2: {
        borderRadius: 10,
        backgroundColor: '#FB003C',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    button3: {
        borderRadius: 10,
        backgroundColor: '#FFBA01',
        marginTop: 30,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    buttonText: {

    }
});