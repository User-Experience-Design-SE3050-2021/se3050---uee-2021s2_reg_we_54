import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, View, FlatList,
    StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";
import FavoriteData from './FavoriteData.json'

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
    const [filteredData, setFilteredData] = useState(FavoriteData.data);
    const [search, setSearch] = useState('');

    const searchFilter = (text) => {
        const newData = FavoriteData.data.filter((item) => {
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
                                <TouchableOpacity onPress={() => navigation.navigate("Favorite WordInfo", item)}>
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