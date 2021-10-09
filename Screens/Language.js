import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from 'react-native-elements';
import bars from 'react-native-vector-icons/FontAwesome';

const image = { uri: "https://image.freepik.com/free-vector/underwater-cartoon-landscape_1284-16922.jpg" };
// const image = { src: "../assets/language lerning.png" }

const Language = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.MainContainer}>

                <Text style={styles.heading}>Language Learning</Text>
                <Button title="Let's Start to Learn" icon={{
                    name: "g-translate",
                    size: 15,
                    color: "white",
                    iconPosition: 'left'
                }}
                    buttonStyle={styles.button1} onPress={() => navigation.navigate("English Learning")} />
                <Button title="Favorite Words" icon={{
                    name: "star",
                    size: 15,
                    color: "white",
                    iconPosition: 'left'
                }} buttonStyle={styles.button2} onPress={() => navigation.navigate("Favorite Word")} />

            </View>
        </ImageBackground>
    );
};

export default Language;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
        marginTop: 0,
        fontFamily: "Arial Black",
        color: "white",
    },

    MainContainer: {
        flex: 1,
    },
    button1: {
        borderRadius: 50,
        backgroundColor: '#FB003C',
        marginTop: "80%",
        height: 50,
        marginLeft: 50,
        fontSize: 40,
        marginRight: 50,
    },
    button2: {
        borderRadius: 50,
        backgroundColor: '#FFBA01',
        marginTop: "5%",
        height: 50,
        marginLeft: 50,
        marginRight: 50,
    },
    buttonText: {

    }
});
