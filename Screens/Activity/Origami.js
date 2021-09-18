import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ListItem, Button } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";

const Origami = () => {
    const navigation = useNavigation();
    return (
        // <SafeAreaView>
        //<ScrollView>

        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Origami Works</Text>
            <View style={{ margin: 'auto' }}>
                <Card containerStyle={styles.Origami}>
                    <Text style={{ fontSizet: 60 }}><b>Origami</b></Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={styles.logo}
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ivS17PvrEouM4Y-gFZzpYnw-w8fgVXgIaw&usqp=CAU',
                                }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ justifyContent: 'flex-end', fontSize: 25 }}>
                                Let’s Create Origami
                            </Text>
                        </View>
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: '#EC9ADA', width: 120, maxHeight: 60, marginLeft: 190 }}
                        title='VIEW'
                        onPress={() => navigation.navigate("Origami")}
                    />
                </Card>
            </View>
        </View>

        //</ScrollView>
        //</SafeAreaView>

    );
};

export default Origami;

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
    Origami: {
        backgroundColor: "#F43B86",
    },
    logo: {
        marginTop: 10,
        width: 120,
        height: 90,
        justifyContent: 'flex-start'
    },
});