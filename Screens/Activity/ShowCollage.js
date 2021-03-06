import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, Linking, ImageBackground } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const ShowCollage = ({ route, navigation }) => {
    //const navigation = useNavigation();
    const { title, imageUrl, desctiption, videoUrl } = route.params;
    const bimage = { uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-cartoon-kid-rainbow-light-green-background-material-image_129842.jpg' }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bimage} resizeMode="cover" style={styles.bimage}>
                <Text style={styles.heading}>{title}</Text>
                <ScrollView style={{ flexGrow: 1 }}>
                    <Card containerStyle={styles.CollageArt}>
                        <Card.Title>Needed Matirials</Card.Title>
                        <Card.Divider />
                        <Text>Scissor</Text>
                        <Text>Any Color Half Sheets</Text>
                        <Text>Glue</Text>
                        <Text>Color Pencil</Text>
                        <Text>Eraser</Text>
                    </Card>
                    <Card containerStyle={styles.CollageArt}>
                        <Card.Title>Creating Step by steps</Card.Title>
                        <Card.Divider />
                        <Text>{desctiption}</Text>
                    </Card>
                    <Card containerStyle={styles.CollageArt}>
                        <Card.Title>Final Result</Card.Title>
                        <Card.Divider />
                        <View style={styles.fixToText}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: imageUrl,
                                }}
                            />
                        </View>
                        <View>
                            <View style={styles.fixToText}>
                                <Button
                                    buttonStyle={{ borderWidth: 1, borderColor: 'black', backgroundColor: '#79f2a1', borderStyle: 'solid', borderRadius: 10 }}
                                    title='Watch Video'
                                    titleStyle={{ color: 'black' }}
                                    onPress={() => Linking.openURL(videoUrl)}
                                />
                            </View>
                        </View>
                    </Card>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bimage: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    image: {
        marginTop: 10,
        width: 120,
        height: 90,
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        justifyContent: 'flex-end',
        fontSize: 25
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    CollageArt: {
        backgroundColor: "#40e677",
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 15,
        marginHorizontal: 40,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fonts: {
        marginBottom: 8,
    },
});


export default ShowCollage;