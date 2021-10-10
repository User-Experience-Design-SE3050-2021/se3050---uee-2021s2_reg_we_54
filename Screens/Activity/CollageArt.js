import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Collage Fish',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqg5vidDMVMBH21tVqeOGrCLVJNi_gIDNNw&usqp=CAU',
        text: "Let's Create Fish.",
        desctiption: "Get a White color Half sheet and draw a fish using pencil. Get blue color,red color,yellow color and green color papers and using scissor cut those papers into small pieces. Get glue and paste blue color small pieces around white space of half sheet don't paste that into fish after that you can paste other color small pieces of papers into the fish. Finally you will able to see finished collage fish.",
        videoUrl: 'https://www.youtube.com/watch?v=PBeLpFWyhes'
    },
    {
        id: '2',
        title: 'Collage Tree',
        imageUrl: 'https://rhythmsofplay.com/wp-content/uploads/2018/08/Autumn-Tree-Collage-for-Kids-sq.jpg',
        text: "Let's Create Tree.",
        desctiption: "Get a White color Half sheet and draw a trunk of tree and branches using pencil. Get green color half sheet draw a leaves according to the flowing video and using scissor cut leaves. Get glue and paste green color leaves where the branches are drawing. Finally get brown color pencil and color branches and trunk of the tree. Finally you will able to see finished collage tree.",
        videoUrl: 'https://www.youtube.com/watch?v=XNIrGy1NOsw'
    },
    {
        id: '3',
        title: 'Collage House',
        imageUrl: 'https://nurturestore.co.uk/wp-content/uploads/2018/10/gingerbread-house-template-printable.jpg',
        text: "Let's Create House.",
        desctiption: "Get any color Half sheet background of the house. Better it will white color and light blue color. Get brown color half and draw small rectangle for house door and draw a another rectangle for house roof (for this follow the video introduction) and using scissor cut those. Get another color half sheet draw a big rectangle for body of the house (you can choose any color half sheet for your chocie). Get glue and paste those half sheet like house matching with color. Finally you will able to finished collage house (follow given video introdution it better to understant well).",
        videoUrl: 'https://www.youtube.com/watch?v=lUsbK04TdgQ'
    },
    {
        id: '4',
        title: 'Collage Flower',
        imageUrl: 'https://149356593.v2.pressablecdn.com/wp-content/uploads/2020/07/KusamaFlower.jpg',
        text: "Let's Create Flower.",
        desctiption: "Get a White color, Red Color, Yellow Color and Pink color and Green Color half sheet. Draw a flower using pencil according the following video give belowe (Use Red,Yellow and Pink color half sheet) and using scissor cut those Flowers. Also, Get green color half sheet and draw trunk of flower using scissor cut thoses trunk. Get White color half sheet and glue and paste flowers and trunks according to the give video introduction. Finally you will able to finished collage flowers.",
        videoUrl: 'https://www.youtube.com/watch?v=MHt3wtV9RrA'
    },
    {
        id: '5',
        title: 'Butterfly',
        imageUrl: 'https://i.pinimg.com/originals/17/79/2b/17792b3ea14990eb3d8e2ecd99e59d4f.jpg',
        text: "Let's Create Butterfly.",
        desctiption: "Get a White color Half sheet and draw a Butterfly using pencil. Get blue color,red color,yellow color and blue color papers and using scissor cut those papers into small pieces. Get glue and paste those red,yello and blue color small pieces in the butterfly wings don't paste that into body of the butterfly after that get browen color pencil and color body of butterfly according video introdution. Finally you will able to finished collage butterfly.",
        videoUrl: 'https://www.youtube.com/watch?v=YqKiIwm0v88'
    },
];

const image = { uri: "https://i.pinimg.com/736x/cd/53/4b/cd534b616e9ff144118a442f06b0facd.jpg" }

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
                        <TouchableOpacity onPress={() => navigation.navigate("Show Collage", item)}>
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