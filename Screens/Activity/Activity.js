import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { useNavigation } from "@react-navigation/core";

const Activity = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.heading}>Activity For Kids</Text>
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
                            <Text style={{ justifyContent: 'flex-end',fontSize:25 }}>
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
                            <Text style={{ justifyContent: 'flex-end',fontSize:25 }}>
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
    );
};

export default Activity;

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
    CollageArt: {
        backgroundColor: "#FDD20E"
    },
    logo: {
        marginTop:10,
        width: 120,
        height: 90,
        justifyContent: 'flex-start'
    },
});
