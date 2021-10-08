import React from "react";
import { StyleSheet, View, Text, Image,ImageBackground } from 'react-native'
import { Card, Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const image = {uri:"https://png.pngtree.com/background/20210711/original/pngtree-student-learning-poster-background-picture-image_1082820.jpg"}

const Activity = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.MainContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.heading}>Activity For Kids</Text>
            <View style={{ margin: 'auto' }}>
                <Card containerStyle={styles.Origami}>
                    <Text style={{ fontSize: 20,fontWeight:"bold" }}>Origami</Text>
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
                        buttonStyle={{ borderRadius: 10, backgroundColor: '#6fd3e3', width: 120, maxHeight: 60, marginLeft: 'auto' }}
                        title='View'
                        titleStyle={{ color: 'black' }}
                        onPress={() => navigation.navigate("Origami")}
                    />
                </Card>
            </View>

            <View style={{ margin: 'auto' }}>
                <Card containerStyle={styles.CollageArt}>
                    <Text style={{ fontSize: 20,fontWeight:"bold" }}>Collage Art</Text>
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
                        buttonStyle={{ borderRadius: 10, backgroundColor: '#79f2a1', width: 120, maxHeight: 60, marginLeft: 'auto'}}
                        title='View'
                        titleStyle={{ color: 'black' }}
                        onPress={() => navigation.navigate("CollageArt")}
                    />
                </Card>
            </View>
            </ImageBackground>
        </View>
      
    );
};

export default Activity;

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop:1
    },
    MainContainer: {
        flex: 1,  
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    Origami: {
        backgroundColor: "#43cbe0",
        borderColor:'black',
        borderRadius: 10,
    },
    CollageArt: {
        backgroundColor: "#40e677",
        borderColor:'black',
        borderRadius: 10,
    },
    logo: {
        marginTop:10,
        width: 120,
        height: 90,
        justifyContent: 'flex-start'
    },
});
