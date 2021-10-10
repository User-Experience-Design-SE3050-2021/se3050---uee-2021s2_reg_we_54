import React from "react";
import {
    StyleSheet, Text, View, ImageBackground, SafeAreaView, Image,
    ToastAndroid, Platform
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button, Icon } from 'react-native-elements';
import bars from 'react-native-vector-icons/FontAwesome';
import FavoriteData from './FavoriteData.json'

const backgroundImage = { uri: "https://i.pinimg.com/236x/8d/1a/8a/8d1a8a9d4fc921c67222a0f6ed7faeee.jpg" };

const WordDetails = ({ route, navigation }) => {

    const { title, imageUrl, description, sinhalaWord, tamilWord, color, firstLetter } = route.params;
    const data = [];

    const notifyMessage = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            alert(msg);
        }
    }

    const addedFavorites = () => {
        const word = {
            title: title,
            imageUrl: imageUrl,
            description: description,
            color: color,
            firstLetter: firstLetter,
            sinhalaWord: sinhalaWord,
            tamilWord: tamilWord,
        }
        const index = FavoriteData.data.findIndex(function (existword, index) {
            return existword.title === word.title
        })
        if (index === -1) {
            FavoriteData.data.push(word);
        } else if (Platform.OS === 'android') {
            ToastAndroid.show("Alredy added to Favorites", ToastAndroid.SHORT)
        } else {
            alert("Alredy added to Favorites")
        }
    }

    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
            <View style={{
                backgroundColor: color,
                padding: 10,
                marginVertical: 8,
                marginHorizontal: 16,
                flex: 1,
                borderRadius: 20
            }}>
                <Text style={styles.heading}>{title}</Text>
                <View style={styles.favorite}>
                    <Icon
                        raised
                        name='star'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => {
                            notifyMessage("Added favorite List")
                            addedFavorites()
                            navigation.navigate("English Learning")
                        }} />
                </View>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                    }}
                />
                <Text style={styles.sinhalaWord}>In Sinhala: {sinhalaWord}</Text>
                <Text style={styles.tamilWord}>In Tamil: {tamilWord}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ImageBackground>
    );
};

export default WordDetails;

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: '100%',
        flex: 1,
        height: '100%',
        justifyContent: "center",
        borderRadius: 10,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 0,
    },
    favorite: {
        marginTop: 10,
        marginRight: 5,
    },
    sinhalaWord: {
        marginTop: 10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    tamilWord: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        // color: 'white',
        marginTop: 5,
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