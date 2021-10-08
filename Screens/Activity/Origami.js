import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image,ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Turtle',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aNHfbq_-iObCads6vtkRzdjUpqbHw-zCqA&usqp=CAU',
        text: "Let's Create Turtle.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '2',
        title: 'Butterfly',
        imageUrl: 'https://i0.wp.com/origami.guide/wp-content/uploads/2020/04/traditional-origami-butterfly-tutorial-00.jpg?fit=1920%2C1920&ssl=1',
        text: "Let's Create Butterfly.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '3',
        title: 'Dinosour',
        imageUrl: 'https://media.istockphoto.com/photos/origami-dinosaur-raptor-picture-id179576055',
        text: "Let's Create Dinosour.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '4',
        title: 'Flower',
        imageUrl: 'https://www.mombrite.com/wp-content/uploads/2021/05/Origami-Tulips-Flowers.jpg',
        text: "Let's Create Flower.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '5',
        title: 'Dog',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KoUyRseVynSy9R38mWh4_rPLNg5SvkbvQ&usqp=CAU',
        text: "Let's Create Dog.",
        desctiption:"aaaaaa",
        videoUrl:'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
];

const image = {uri:"https://i.pinimg.com/736x/6e/39/9f/6e399f235c116115b11bef35ac082ca4.jpg"}

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

const Origami = () => {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);

    const searchFilter = (text) => {
        const newData = DATA.filter(function (item) {
            const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
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
                containerStyle={{backgroundColor:"#c9eaf0",marginBottom:5}}
            />
            <Text style={styles.heading}>Origami Works</Text>
                <FlatList
               
                    numColumns={1}
                    data={filteredDataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ShowOrigami", item)}>
                            <Item title={item.title} imageUrl={item.imageUrl} text={item.text} desctiption={item.desctiption} videoUrl={item.videoUrl} />
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
    item: {
        backgroundColor: '#43cbe0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 25,
        flex: 1,
        borderRadius: 10,
        borderColor:'black'
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
    bimage: {
        flex: 1,
        justifyContent: "center"
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
        marginTop:10,
        borderRadius:6
    }
});

export default Origami;