import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const ShowCollage = ({ route, navigation }) => {
    //const navigation = useNavigation();
    const { title } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <FlatList
                    numColumns={1}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </TouchableOpacity> */}
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
        fontSize: 30,
        //fontFamily: "Franklin Gothic Demi"
    },
});


export default ShowCollage;