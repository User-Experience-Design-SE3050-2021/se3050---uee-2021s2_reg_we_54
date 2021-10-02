import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Turtle',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aNHfbq_-iObCads6vtkRzdjUpqbHw-zCqA&usqp=CAU',
        text: "Let's Create Turtle."
    },
    {
        id: '2',
        title: 'Butterfly',
        imageUrl: 'https://i0.wp.com/origami.guide/wp-content/uploads/2020/04/traditional-origami-butterfly-tutorial-00.jpg?fit=1920%2C1920&ssl=1',
        text: "Let's Create Butterfly."
    },
    {
        id: '3',
        title: 'Dinosour',
        imageUrl: 'https://media.istockphoto.com/photos/origami-dinosaur-raptor-picture-id179576055',
        text: "Let's Create Dinosour."
    },
    {
        id: '4',
        title: 'Flower',
        imageUrl: 'https://www.mombrite.com/wp-content/uploads/2021/05/Origami-Tulips-Flowers.jpg',
        text: "Let's Create Flower."
    },
    {
        id: '5',
        title: 'Dog',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KoUyRseVynSy9R38mWh4_rPLNg5SvkbvQ&usqp=CAU',
        text: "Let's Create Dog."
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

const Origami = () => {
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
            const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
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
                containerStyle={{backgroundColor:"#F7EDFF",marginBottom:5}}
                inputStyle={{ color: '#000000' }}
            />
            {/* <TextInput
                style={styles.textinput}
                onChangeText={(text) => searchFilter(text)}
                value={search}
                placeholder="Type Here..."
                onClear={(text) => searchFilter('')}
            /> */}
            <Text style={styles.heading}>Origami Works</Text>
                <FlatList
                    numColumns={1}
                    data={filteredDataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ShowOrigami", item)}>
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
        backgroundColor: '#F43B86',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 25,
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
        marginTop:10,
        borderRadius:6
    }
});

export default Origami;