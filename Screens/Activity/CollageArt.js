import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image, ImageBackground,TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Collage Fish',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqg5vidDMVMBH21tVqeOGrCLVJNi_gIDNNw&usqp=CAU',
        text: "Let's Create Fish.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '2',
        title: 'Collage Tree',
        imageUrl: 'https://rhythmsofplay.com/wp-content/uploads/2018/08/Autumn-Tree-Collage-for-Kids-sq.jpg',
        text: "Let's Create Tree.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '3',
        title: 'Collage House',
        imageUrl: 'https://nurturestore.co.uk/wp-content/uploads/2018/10/gingerbread-house-template-printable.jpg',
        text: "Let's Create House.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '4',
        title: 'Collage Flower',
        imageUrl: 'https://149356593.v2.pressablecdn.com/wp-content/uploads/2020/07/KusamaFlower.jpg',
        text: "Let's Create Flower.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '5',
        title: 'Butterfly',
        imageUrl: 'https://i.pinimg.com/originals/17/79/2b/17792b3ea14990eb3d8e2ecd99e59d4f.jpg',
        text: "Let's Create Butterfly.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
];

const image = {uri:"https://thumbs.dreamstime.com/b/cute-birds-trees-rainbow-seamless-pattern-kids-collage-style-childish-background-children-red-green-white-use-141896111.jpg"}

const Item = ({ title, imageUrl, text }) => (

    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    </View>
);

const CollageArt = () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);

    const searchFilter = (text) => {
        const newData = DATA.filter(function (item) {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
            <SearchBar
                round
                lightTheme
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilter(text)}
                onClear={(text) => searchFilter('')}
                placeholder="Type Here..."
                value={search}
                containerStyle={{ backgroundColor: "#65eb88", marginBottom: 5 }}
                inputStyle={{ color: '#000000' }}
            />
            
            <Text style={styles.heading}>Collage Art Works</Text>
            <FlatList
                numColumns={1}
                data={filteredDataSource}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ShowCollage", item)}>
                        <Item title={item.title} imageUrl={item.imageUrl} text={item.text} desctiption={item.desctiption} videoUrl={item.videoUrl}/>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bimage: {
        flex: 1,
        justifyContent: "center"
    },
    item: {
        backgroundColor: '#40e677',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 25,
        margin: 'auto',
        flex: 1,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    image: {
        marginTop: 10,
        width: 120,
        height: 90,
        justifyContent: 'flex-start'
    },
    text: {
        justifyContent: 'flex-end',
        fontSize: 25
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    textinput: {
        height: 30,
        borderWidth: 3,
        borderColor: '#000000',
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 6
    }
});

export default CollageArt;