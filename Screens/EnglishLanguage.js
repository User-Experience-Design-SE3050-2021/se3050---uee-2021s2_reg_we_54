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
        sinhalaWord: `ඇපල්`,
        tamilWord: `ஆப்பிள்`,
        description: 'The apple tree (Malus domestica) is a tree that grows apples. It is best known for this juicy, tasty fruit. The tree is grown worldwide. Its fruit is low-cost, and is harvested all over the world.',
        imageUrl: `https://www.collinsdictionary.com/images/full/apple_158989157.jpg`,
    },
    {
        id: '2',
        title: 'Bus',
        firstLetter: 'B',
        color: '#f79011',
        sinhalaWord: `බස්`,
        tamilWord: `பேருந்து`,
        description: 'A bus (contracted from omnibus, with variants multibus, motorbus, autobus, etc.) is a public transport road vehicle designed to carry significantly more passengers that the average cars or vans. Buses can have a capacity as high as 300 passengers,',
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxYaP1CMZEuXvfTyJHchPitgQfWKTp4VQSA&usqp=CAU`,
    },
    {
        id: '3',
        title: 'Car',
        firstLetter: 'C',
        color: '#f5e618',
        sinhalaWord: `මෝටර් රථ`,
        tamilWord: `கார்`,
        description: `A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods.`,
        imageUrl: `https://i.pinimg.com/236x/c3/51/24/c351249484c3f76510cc34b064b68b4e.jpg`,
    },
    {
        id: '4',
        title: 'Dog',
        firstLetter: 'D',
        color: '#4deb65',
        sinhalaWord: `බල්ලා`,
        tamilWord: `நாய்`,
        description: `The dog or domestic dog is a domesticated descendant of the grey wolf, characterized by an upturning tail. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog's nearest living relative. `,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yNuRadDltSjnwbrbmIRMnuuY1WqLrTvptg&usqp=CAU`,
    },
    {
        id: '5',
        title: 'Elephant',
        firstLetter: 'E',
        color: '#3694ff',
        sinhalaWord: `අලියා`,
        tamilWord: `யானை`,
        description: `Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are an informal grouping within the family Elephantidae of the order Proboscidea.`,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oteB-aJEIofYRwLNUwo4X3NZSEzG3Hzrag&usqp=CAU`,
    },
    {
        id: '6',
        title: 'Flag',
        firstLetter: 'F',
        color: '#c097fc',
        sinhalaWord: `ධජ`,
        tamilWord: `கொடி`,
        description: `A flag is a piece of fabric with a distinctive design and colours. It is used as a symbol, a signalling device, or for decoration.`,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zk55nfJ_-9taOIGlPptNYhWp_vvFODc6xQ&usqp=CAU`,
    },
    {
        id: '7',
        title: 'Grapes',
        firstLetter: 'G',
        color: '#ffbdff',
        sinhalaWord: `මිදි`,
        tamilWord: `திராட்சை`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUI8328ZekwaOQAtVBOQ4U7qDyeqqMbDNdEA&usqp=CAU`,
    },
    {
        id: '8',
        title: 'Horse',
        firstLetter: 'H',
        color: '#FAFEFE',
        sinhalaWord: `අශ්වයා`,
        tamilWord: `குதிரை`,
        description: `The horse or domestic horse is a domesticated one-toed hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant species in the subgenus Equus. `,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKraOnj_pNoD60hTYVJlYUBKPIxu0VU7HV5g&usqp=CAU`,
    },
    {
        id: '9',
        title: 'Ice Cream',
        firstLetter: 'I',
        color: '#f57f7f',
        sinhalaWord: `අයිස් ක්රීම්`,
        tamilWord: `பனிக்கூழ்`,
        description: `ce cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.`,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9iY7Qfhv_PYn1XOd2vqjxbfj66uhGSyx14g&usqp=CAU`,
    },
    {
        id: '10',
        title: 'Jug',
        firstLetter: 'J',
        color: '#f79011',
        sinhalaWord: `ජෝගුව`,
        tamilWord: `குடம்`,
        description: `A jug is a type of container commonly used to hold liquids. It has an opening, sometimes narrow, from which to pour or drink, and has a handle, and often a pouring lip. Jugs throughout history have been made of metal, and ceramic, or glass, and plastic is now common.`,
        imageUrl: `https://media.istockphoto.com/photos/water-in-jug-picture-id175500133?k=20&m=175500133&s=612x612&w=0&h=AC2yNJ2-78jH0Zy--z4rWWUvVQQHyOzyQTld8W9JVyo=`,
    },
    {
        id: '11',
        title: 'Kite',
        firstLetter: 'K',
        color: '#f5e618',
        sinhalaWord: ``,
        tamilWord: ``,
        description: ` `,
        imageUrl: `https://cdn.shopify.com/s/files/1/2279/1321/products/KI0001_1.jpg?v=1609910000`,
    },
    {
        id: '12',
        title: 'Lion',
        firstLetter: 'L',
        color: '#4deb65',
        sinhalaWord: `සිංහයා`,
        tamilWord: `சிங்கம்`,
        description: `The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.`,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JJ4o8O3oxsDJC_cqc4pz1EZKZMDlaciqeg&usqp=CAU`,
    },
    {
        id: '13',
        title: 'Monkey',
        firstLetter: 'M',
        color: '#3694ff',
        sinhalaWord: `වඳුරා`,
        tamilWord: `குரங்கு`,
        description: `Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians. `,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1aJ3jKMHSQo2mvT7XMuXGmK-hU47YYAvbw&usqp=CAU`,
    },
    {
        id: '14',
        title: 'Nest',
        firstLetter: 'N',
        color: '#c097fc',
        sinhalaWord: `කූඩුව`,
        tamilWord: `கூடு`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mAUAFh4M_IIlhC9Zo_zBYF6zehwEolY66g&usqp=CAU`,
    },
    {
        id: '15',
        title: 'Orange',
        firstLetter: 'O',
        color: '#ffbdff',
        sinhalaWord: `දොඩම්`,
        tamilWord: `ஆரஞ்சு`,
        description: ``,
        imageUrl: `https://supersavings.lk/wp-content/uploads/2021/05/Orange-1.png`,
    },
    {
        id: '16',
        title: 'Pen',
        firstLetter: 'P',
        color: '#FAFEFE',
        sinhalaWord: `පෑන`,
        tamilWord: `பேனா`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uew-7rmgd-1LCu-uTrI3DxE2mlt55RdXDA&usqp=CAU`,
    },
    {
        id: '17',
        title: 'Queen',
        firstLetter: 'Q',
        color: '#f57f7f',
        sinhalaWord: `රැජින`,
        tamilWord: `ராணி`,
        description: ``,
        imageUrl: `https://image.shutterstock.com/image-vector/cute-girl-queen-isolated-female-260nw-393778507.jpg`,
    },
    {
        id: '18',
        title: 'Rat',
        firstLetter: 'R',
        color: '#f79011',
        sinhalaWord: `මීයා`,
        tamilWord: `எலி`,
        description: ``,
        imageUrl: `https://t3.ftcdn.net/jpg/02/38/30/44/360_F_238304488_fxax8qdanILslIWMy8LEl3FnHDhrUAm0.jpg`,
    },
    {
        id: '20',
        title: 'Sun',
        firstLetter: `S`,
        color: '#f5e618',
        sinhalaWord: `හිරු`,
        tamilWord: `சூரியன்`,
        description: ``,
        imageUrl: `https://st.depositphotos.com/1007168/1249/i/950/depositphotos_12492703-stock-photo-summer-hot-sun.jpg`,
    },
    {
        id: '21',
        title: 'Tiger',
        firstLetter: 'T',
        color: '#4deb65',
        sinhalaWord: `කොටියා`,
        tamilWord: `புலி`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlczlol65-Zg6XV4rQdkySU4b6ECSF2aK4fg&usqp=CAU`,
    },
    {
        id: '22',
        title: 'Umbrella',
        firstLetter: 'U',
        color: '#3694ff',
        sinhalaWord: `කුඩය`,
        tamilWord: `குடை`,
        description: ``,
        imageUrl: `https://image.shutterstock.com/image-vector/vector-image-rainbow-rain-umbrella-260nw-1741950095.jpg`,
    },
    {
        id: '23',
        title: 'Van',
        firstLetter: 'V',
        color: '#c097fc',
        sinhalaWord: `වෑන්`,
        tamilWord: `வான்`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFbPUI7c3LbJmFgwFUHf9C_vrgq97Nm2wYQ&usqp=CAU`,
    },
    {
        id: '24',
        title: 'Wheel',
        firstLetter: 'W',
        color: '#ffbdff',
        sinhalaWord: `රෝදය`,
        tamilWord: `சக்கரம்`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhdOyusCbfe53RestbpycRLxVkeW7pzSQiA&usqp=CAU`,
    },
    {
        id: '25',
        title: 'Xmas Tree',
        firstLetter: 'X',
        color: '#FAFEFE',
        sinhalaWord: `නත්තල් ගස`,
        tamilWord: `கிறிஸ்துமஸ் மரம்`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKpp0vm7_D_wvuOKTJ612gT1-imkvZEVNlQ&usqp=CAU`,
    },
    {
        id: '26',
        title: 'Yak',
        firstLetter: 'Y',
        color: '#f57f7f',
        sinhalaWord: `යක්`,
        tamilWord: `யாக்`,
        description: ``,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQASMzmKawhaTnjGvPrpuUxVODLTxKnJcXrA&usqp=CAU`,
    },
    {
        id: '27',
        title: 'Zebra',
        firstLetter: 'Z',
        color: '#f79011',
        sinhalaWord: `සීබ්රා`,
        tamilWord: `வரிக்குதிரை`,
        description: `Zebras are mammals of the family Equidae. Zebras are African horses. They are in the same genus as the common horse, Equus caballus, and donkeys. Zebras are known for having many black and white stripes. There are three main species of zebra, Grevy's Zebra, the Plains Zebra, and the Mountain Zebra.`,
        imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ4jp56L5E1DiBDwZhX3GuEHWnPkPCHNTRQ&usqp=CAU`,
    },
];

const image = { uri: "https://i.pinimg.com/564x/5a/51/f2/5a51f28c1a36ce2b503ed43d3a71aa8e.jpg" };

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
                                    <Item
                                        title={item.title}
                                        firstLetter={item.firstLetter}
                                        color={item.color}
                                        sinhalaWord={item.sinhalaWord}
                                        tamilWord={item.tamilWord}
                                        description={item.description}
                                        imageUrl={item.imageUrl} />
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