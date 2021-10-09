import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, View, FlatList,
    StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Apple',
        firstLetter: 'A',
        color: '#f57f7f',
        imageUrl: `https://www.collinsdictionary.com/images/full/apple_158989157.jpg`,
    },
    {
        id: '2',
        title: 'Bus',
        firstLetter: 'B',
        color: '#f79011',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxYaP1CMZEuXvfTyJHchPitgQfWKTp4VQSA&usqp=CAU`,
    },
    {
        id: '3',
        title: 'Car',
        firstLetter: 'C',
        color: '#f5e618',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVBxgRjR13ja1pNu3qhBaVUeVqD3S5rmrPg&usqp=CAU`,
    },
    {
        id: '4',
        title: 'Dog',
        firstLetter: 'D',
        color: '#4deb65',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yNuRadDltSjnwbrbmIRMnuuY1WqLrTvptg&usqp=CAU`,
    },
    {
        id: '5',
        title: 'Elephant',
        firstLetter: 'E',
        color: '#3694ff',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oteB-aJEIofYRwLNUwo4X3NZSEzG3Hzrag&usqp=CAU`,
    },
    {
        id: '6',
        title: 'Flag',
        firstLetter: 'F',
        color: '#c097fc',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zk55nfJ_-9taOIGlPptNYhWp_vvFODc6xQ&usqp=CAU`,
    },
    {
        id: '7',
        title: 'Grapes',
        firstLetter: 'G',
        color: '#ffbdff',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUI8328ZekwaOQAtVBOQ4U7qDyeqqMbDNdEA&usqp=CAU`,
    },
    {
        id: '8',
        title: 'Hourse',
        firstLetter: 'H',
        color: '#FAFEFE',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKraOnj_pNoD60hTYVJlYUBKPIxu0VU7HV5g&usqp=CAU`,
    },
    {
        id: '9',
        title: 'Ice Cream',
        firstLetter: 'I',
        color: '#f57f7f',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iY7Qfhv_PYn1XOd2vqjxbfj66uhGSyx14g&usqp=CAU`,
    },
    {
        id: '10',
        title: 'Jug',
        firstLetter: 'J',
        color: '#f79011',
        imageUrl: `https://media.istockphoto.com/photos/water-in-jug-picture-id175500133?k=20&m=175500133&s=612x612&w=0&h=AC2yNJ2-78jH0Zy--z4rWWUvVQQHyOzyQTld8W9JVyo=`,
    },
    {
        id: '11',
        title: 'Kite',
        firstLetter: 'K',
        color: '#f5e618',
        imageUrl: `https://cdn.shopify.com/s/files/1/2279/1321/products/KI0001_1.jpg?v=1609910000`,
    },
    {
        id: '12',
        title: 'Lion',
        firstLetter: 'L',
        color: '#4deb65',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JJ4o8O3oxsDJC_cqc4pz1EZKZMDlaciqeg&usqp=CAU`,
    },
    {
        id: '13',
        title: 'Monkey',
        firstLetter: 'M',
        color: '#3694ff',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1aJ3jKMHSQo2mvT7XMuXGmK-hU47YYAvbw&usqp=CAU`,
    },
    {
        id: '14',
        title: 'Nest',
        firstLetter: 'N',
        color: '#c097fc',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mAUAFh4M_IIlhC9Zo_zBYF6zehwEolY66g&usqp=CAU`,
    },
    {
        id: '15',
        title: 'Orange',
        firstLetter: 'O',
        color: '#ffbdff',
        imageUrl: `https://supersavings.lk/wp-content/uploads/2021/05/Orange-1.png`,
    },
    {
        id: '16',
        title: 'Pen',
        firstLetter: 'P',
        color: '#FAFEFE',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uew-7rmgd-1LCu-uTrI3DxE2mlt55RdXDA&usqp=CAU`,
    },
    {
        id: '17',
        title: 'Queen',
        firstLetter: 'Q',
        color: '#f57f7f',
        imageUrl: `https://image.shutterstock.com/image-vector/cute-girl-queen-isolated-female-260nw-393778507.jpg`,
    },
    {
        id: '18',
        title: 'Rat',
        firstLetter: 'R',
        color: '#f79011',
        imageUrl: `https://t3.ftcdn.net/jpg/02/38/30/44/360_F_238304488_fxax8qdanILslIWMy8LEl3FnHDhrUAm0.jpg`,
    },
    {
        id: '20',
        title: 'Sun',
        firstLetter: `S`,
        color: '#f5e618',
        imageUrl: `https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg`,
    },
    {
        id: '21',
        title: 'Tiger',
        firstLetter: 'T',
        color: '#4deb65',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlczlol65-Zg6XV4rQdkySU4b6ECSF2aK4fg&usqp=CAU`,
    },
    {
        id: '22',
        title: 'Umbrella',
        firstLetter: 'U',
        color: '#3694ff',
        imageUrl: `https://image.shutterstock.com/image-vector/vector-image-rainbow-rain-umbrella-260nw-1741950095.jpg`,
    },
    {
        id: '23',
        title: 'Van',
        firstLetter: 'V',
        color: '#c097fc',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFbPUI7c3LbJmFgwFUHf9C_vrgq97Nm2wYQ&usqp=CAU`,
    },
    {
        id: '24',
        title: 'Wheel',
        firstLetter: 'W',
        color: '#ffbdff',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhdOyusCbfe53RestbpycRLxVkeW7pzSQiA&usqp=CAU`,
    },
    {
        id: '25',
        title: 'Xmas Tree',
        firstLetter: 'X',
        color: '#FAFEFE',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKpp0vm7_D_wvuOKTJ612gT1-imkvZEVNlQ&usqp=CAU`,
    },
    {
        id: '26',
        title: 'Yak',
        firstLetter: 'Y',
        color: '#f57f7f',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQASMzmKawhaTnjGvPrpuUxVODLTxKnJcXrA&usqp=CAU`,
    },
    {
        id: '27',
        title: 'Zebra',
        firstLetter: 'Z',
        color: '#f79011',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ4jp56L5E1DiBDwZhX3GuEHWnPkPCHNTRQ&usqp=CAU`,
    },
];

const image = { uri: "https://i.pinimg.com/564x/5a/51/f2/5a51f28c1a36ce2b503ed43d3a71aa8e.jpg" };
// const image = { src: "../assets/language lerning.png" }

const Item = ({ title, firstLetter, color, imageUrl }) => (
    <View style={{
        backgroundColor: color,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        borderRadius: 20,

    }}>
        <Image
            style={styles.image}
            source={{
                uri: imageUrl,
            }}
        />
        <Text style={styles.firstLetter}>{firstLetter} for</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const EnglishLanguage = () => {
    const navigation = useNavigation();
    const [filteredData, setFilteredData] = useState(DATA);
    const [search, setSearch] = useState('');

    const searchFilter = (text) => {
        const newData = DATA.filter((item) => {
            const itemData = item.title ? item.title : '';
            const textData = text;
            return itemData.indexOf(textData) > -1;
        })
        setFilteredData(newData);
        setSearch(text);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.container}>
                    <SearchBar
                        lightTheme
                        round
                        searchIcon={{ size: 24 }}
                        onChangeText={(text) => searchFilter(text)}
                        onClear={(text) => searchFilter('')}
                        placeholder="Search Here..."
                        value={search}
                        inputStyle={{ color: 'black' }}
                        cancelIcon={{ color: 'black' }}
                        containerStyle={{ backgroundColor: "#73cff5", marginBottom: 5 }}
                    />
                    <ScrollView style={styles.scrollView}>
                        <FlatList
                            numColumns={2}
                            data={filteredData}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("Word Details", item)}>
                                    <Item title={item.title} color={item.color} firstLetter={item.firstLetter} imageUrl={item.imageUrl} description={item.description} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        // backgroundColor: "#73cff5",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    scrollView: {

    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        // fontFamily: "Franklin Gothic Demi"
    },
    firstLetter: {
        color: 'red',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        flex: 1,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
    }
});

export default EnglishLanguage;