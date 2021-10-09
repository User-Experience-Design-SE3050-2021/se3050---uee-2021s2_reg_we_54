import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'Turtle',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7aNHfbq_-iObCads6vtkRzdjUpqbHw-zCqA&usqp=CAU',
        text: "Let's Create Turtle.",
        desctiption: "Fold the paper in half. Fold the paper in half again. Open the paper out over to the right. Squash Fold the paper flat. Turn the paper over. Open the paper over to the left and Squash Fold it flat. Fold the sides in along the dotted lines and unfold. Then fold the top down along the dotted line and unfold. Lift up the top layer of paper along the crease at the top. Fold in the sides along the existing creases into a Petal Fold. Make a cut along the top flap down to the start of the dotted lines. Then fold out both sides. Make a Pleat Fold along the dotted lines. Make an Outside Reverse Fold along the dotted lines. Fold the top flaps of paper out along the dotted lines. Fold the sides and bottom in along the dotted lines. Fold the bottom back out making a Pleat. Turn the paper over.",
        videoUrl: 'https://www.youtube.com/watch?v=5-hnjdecztA'
    },
    {
        id: '2',
        title: 'Butterfly',
        imageUrl: 'https://i0.wp.com/origami.guide/wp-content/uploads/2020/04/traditional-origami-butterfly-tutorial-00.jpg?fit=1920%2C1920&ssl=1',
        text: "Let's Create Butterfly.",
        desctiption: "Crease this fold well and then unfold it.Fold the bottom quarter of the paper along the dotted line to the centre line.Crease this fold well and then unfold it. Crease this fold well and then unfold it.Turn the paper over so the white side is facing up again.Fold the two sides of the paper towards the centre along the dotted line. Fold the left quarter of the paper along the dotted line to the centre line.Crease this fold well and then unfold it.Fold the paper in half diagonally. Fold it in half horizontally, crease it well and then unfold it.Fold the paper in half vertically, crease it well and then unfold it.Fold the top quarter of the paper along the dotted line to the centre line. Crease this fold well and then unfold it.Fold the next corner of the paper to the centre along the dotted line. The dotted line goes from the top corner to halfway down the diagonal line at the bottom as you can see in the diagram.Flip the model over.Valley Fold along the dotted line in the direction of the arrow in the diagram. Fold the corner of the paper to the centre along the dotted line.This gives the butterfly it’s final shape.The Completed Origami Butterfly.",
        videoUrl: 'https://www.youtube.com/watch?v=_V2jN2_R3GI'
    },
    {
        id: '3',
        title: 'Dinosour',
        imageUrl: 'https://media.istockphoto.com/photos/origami-dinosaur-raptor-picture-id179576055',
        text: "Let's Create Dinosour.",
        desctiption: "Take the inside bottom corner of each quadrilateral portion and valley fold it outward as far as the paper will allow you to fold before tearing. Valley fold the lower left side up and in until the edge of this side meets the bottom edge of your previously folded top portions. Fold the top right edge of the paper in until it meets the crease at the center of the paper. Pleat the top of the shape, positioning the pleating so that the mountain fold hits the crease separating the tip of the structure from the main part of the rectangular body. Fold the top left edge in the same way so that it meets at the center crease. Valley fold to the center crease. Fold the lowest corner of the center diamond up so that it meets somewhere along the center of the upper tip, but not quite at the very top. Mountain fold a narrow strip just above this valley fold to complete the pleat. Valley fold the diagonal bottom sides in as far as they will go without ripping. Valley fold along the bottom-most crease you can find.Rotate the model until the largest triangle, which forms the tail, can rest on the table. This step completes your origami T-Rex.",
        videoUrl: 'https://www.youtube.com/watch?v=JMP9IczMLuM'
    },
    {
        id: '4',
        title: 'Flower',
        imageUrl: 'https://www.mombrite.com/wp-content/uploads/2021/05/Origami-Tulips-Flowers.jpg',
        text: "Let's Create Flower.",
        desctiption: "Fold the square in half, diagonally, to make a triangle. Fold the triangle in half. Open the fold you just made and make sure the folded line is facing upwards. Fold the points on the base of the triangle upwards as shown. Turn your flower over. Fold back the sides of the flower as shown. Turn your flower over and marvel at your pretty origami creation! ",
        videoUrl: 'https://www.youtube.com/watch?v=LFHGsHdY8w4'
    },
    {
        id: '5',
        title: 'Dog',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4KoUyRseVynSy9R38mWh4_rPLNg5SvkbvQ&usqp=CAU',
        text: "Let's Create Dog.",
        desctiption: "Fold the top corner down to the bottom corner to make a triangle. Bring the right point over to the left point and lightly crease. Unfold the previous step. Fold the top right point down into a position similar to this.  Repeat on the left. Folding the ears at different angles will change the look of your dog's head and ears. Fold both layers of the bottom point up a little. This step completes your origami Dog",
        videoUrl: 'https://www.youtube.com/watch?v=vyL9iQbcAD8'
    },
];

const image = { uri: "https://i.pinimg.com/736x/6e/39/9f/6e399f235c116115b11bef35ac082ca4.jpg" }

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

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);

    const searchFilter = (text) => {
        const newData = DATA.filter(function (item) {
            const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.bimage}>
                <SearchBar
                    round
                    lightTheme
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilter(text)}
                    onClear={(text) => searchFilter('')}
                    placeholder="Type Here..."
                    value={search}
                    containerStyle={{ backgroundColor: "#c9eaf0", marginBottom: 5 }}
                />
                <Text style={styles.heading}>Origami Works</Text>
                <FlatList

                    numColumns={1}
                    data={filteredDataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("ShowOrigami", item)}>
                            <Item title={item.title} imageUrl={item.imageUrl} text={item.text} desctiption={item.desctiption} videoUrl={item.videoUrl} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#43cbe0',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 25,
        flex: 1,
        borderRadius: 10,
        borderColor: 'black'
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
        justifyContent: 'flex-start'
    },
    bimage: {
        flex: 1,
        justifyContent: "center"
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

export default Origami;