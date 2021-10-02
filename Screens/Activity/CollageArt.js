import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Collage Fish',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqg5vidDMVMBH21tVqeOGrCLVJNi_gIDNNw&usqp=CAU',
        text: "Let's Create Fish."
    },
    {
        id: '2',
        title: 'Collage Tree',
        imageUrl: 'https://rhythmsofplay.com/wp-content/uploads/2018/08/Autumn-Tree-Collage-for-Kids-sq.jpg',
        text: "Let's Create Tree."
    },
    {
        id: '3',
        title: 'Collage House',
        imageUrl: 'https://nurturestore.co.uk/wp-content/uploads/2018/10/gingerbread-house-template-printable.jpg',
        text: "Let's Create House."
    },
    {
        id: '4',
        title: 'Collage Flower',
        imageUrl: 'https://149356593.v2.pressablecdn.com/wp-content/uploads/2020/07/KusamaFlower.jpg',
        text: "Let's Create Flower."
    },
    {
        id: '5',
        title: 'Butterfly',
        imageUrl: 'https://i.pinimg.com/originals/17/79/2b/17792b3ea14990eb3d8e2ecd99e59d4f.jpg',
        text: "Let's Create Butterfly."
    },
];

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
    // const renderItem = ({ item }) => (
    //     <Item title={item.title} imageUrl={item.imageUrl} text={item.text} />
    // );

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);
    // const [masterDataSource, setMasterDataSource] = useState([]);

    // useEffect(() => {
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       setFilteredDataSource(responseJson);
    //       setMasterDataSource(responseJson);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);


    const searchFilter = (text) => {
        // Check if searched text is not blank
        //if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = DATA.filter(function (item) {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
        //} //else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        //setFilteredDataSource(masterDataSource);
        //setSearch(text);
        //}
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                round
                lightTheme
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilter(text)}
                onClear={(text) => searchFilter('')}
                placeholder="Type Here..."
                value={search}
                containerStyle={{ backgroundColor: "#F7EDFF", marginBottom: 5 }}
                inputStyle={{ color: '#000000' }}
            />
            {/* <TextInput
                style={styles.textinput}
                onChangeText={(text) => searchFilter(text)}
                value={search}
            /> */}
            <Text style={styles.heading}>Collage Art Works</Text>
            <FlatList
                numColumns={1}
                data={filteredDataSource}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ShowCollage", item)}>
                        <Item title={item.title} imageUrl={item.imageUrl} text={item.text} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#F7EDFF",
    },
    item: {
        backgroundColor: '#FDD20E',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 25,
        margin: 'auto',
        flex: 1,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        // fontFamily: "Franklin Gothic Demi"
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