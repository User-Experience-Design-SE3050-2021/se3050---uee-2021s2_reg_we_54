import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ListItem, Button } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";

const CollageArt = () => {
    const navigation = useNavigation();
    return (
        // <SafeAreaView>
        //<ScrollView>

        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Collage Art Works</Text>
            <View style={{ margin: 'auto' }}>
                <Card containerStyle={styles.CollageArt}>
                    <Text><b>Collage Art</b></Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={styles.logo}
                                source={{
                                    uri: 'https://i.pinimg.com/originals/00/8a/62/008a62278016198b9587e0bbcee10865.jpg',
                                }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ justifyContent: 'flex-end', fontSize: 25 }}>
                                Let’s Create Collage
                            </Text>
                        </View>
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#EFF264', width: 120, maxHeight: 60, marginLeft: 190 }}
                        title='VIEW'
                        onPress={() => navigation.navigate("CollageArt")}
                    />
                </Card>
            </View>
        </View>

        //</ScrollView>
        //</SafeAreaView>

    );
};

export default CollageArt;

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    },
    MainContainer: {
        flex: 1,
        backgroundColor: "#F7EDFF",
    },
    CollageArt: {
        backgroundColor: "#FDD20E"
    },
    logo: {
        marginTop: 10,
        width: 120,
        height: 90,
        justifyContent: 'flex-start'
    },
});