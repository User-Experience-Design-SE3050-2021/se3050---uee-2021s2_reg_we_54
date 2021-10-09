import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'ஆப்பிள் ',
        imageUrl: `https://www.collinsdictionary.com/images/full/apple_158989157.jpg`,
    },
    {
        id: '2',
        title: 'பேருந்து',
        imageUrl: `https://i.pinimg.com/564x/4f/7b/74/4f7b740a36f2bbe77319c446b8dcf3ff.jpg`,
    },
    {
        id: '3',
        title: 'கார்',
        imageUrl: `https://i.pinimg.com/564x/40/bd/6a/40bd6aebbb0694c502f1604f86e83184.jpg`,
    },
    {
        id: '4',
        title: 'பூனை',
        imageUrl: `https://i.pinimg.com/564x/56/ce/5c/56ce5cf1623e3ee5d53ca85d156fcc98.jpg`,
    },
    {
        id: '5',
        title: 'நாய்',
        imageUrl: `https://purewows3.imgix.net/images/articles/2019_04/smartest-dog-breeds-Border-Collie.jpg?auto=format,compress&cs=strip`,
    },
    {
        id: '6',
        title: 'யானை',
        imageUrl: `https://i.pinimg.com/564x/4c/a7/5f/4ca75f57ffbb3e2e474fd3c76877c817.jpg`,
    },
    {
        id: '7',
        title: 'கொடி',
        imageUrl: `https://i.pinimg.com/564x/d3/51/49/d351497f93a06e031db47e272f901d0a.jpg`,
    },
    {
        id: '8',
        title: 'திராட்சை',
        imageUrl: `https://i.pinimg.com/564x/03/63/3d/03633dcc0bb16bf641a7dacb8ac79c9f.jpg`,
    },
    {
        id: '9',
        title: 'குதிரை',
        imageUrl: `https://i.pinimg.com/236x/30/2c/78/302c78e78ca9f284fa64c4c7e2d1da55.jpg`,
    },
    {
        id: '10',
        title: 'பனிக்கூழ்',
        imageUrl: `https://i.pinimg.com/564x/db/2c/c8/db2cc876babc8f8eb0226d3b92e9d901.jpg`,
    },
];



const Item = ({ title, imageUrl }) => (
    <View style={styles.item}>
        <Image
            style={styles.image}
            source={{
                uri: imageUrl,
            }}
        />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const TamilLanguage = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} imageUrl={item.imageUrl} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#fad87d",
    },
    item: {
        backgroundColor: '#FAFEFE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        alignContent: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        // fontFamily: "Franklin Gothic Demi"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        flex: 1,

    },
});

export default TamilLanguage;