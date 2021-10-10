import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";

const DATA = [
    {
        id: '1',
        title: 'ඇපල්',
        imageUrl: `https://www.collinsdictionary.com/images/full/apple_158989157.jpg`,
        description: `ඇපල් යනු ඇපල් ගසේ ආඵලීන පළතුර වන අතර, එය රෝස පවුලේ(Rosaceae) Malus domestica නම් කුළයට අයත් වේ. මෙය ඉතා බහුල වශයෙන් වගා කරනු ලබන පළතුරු ගස් වලින් එකක් වන අතර මිනිසුන් විසින් භාවිතා කරන genus Malus වර්ගයේ සාමාජිකයන්ගෙන් බහුල වශයෙන්ම පතළ පළතුරයි. `

    },
    {
        id: '2',
        title: 'බස්',
        imageUrl: `https://i.pinimg.com/564x/4f/7b/74/4f7b740a36f2bbe77319c446b8dcf3ff.jpg`,
        description: `බස් රථයක් (සර්ව බස් රථයෙන් ගිවිසුම් ගත වීම,  බහු බස්, මෝටර බස්, ඔටෝ බස්, ආදිය) පොදු ප්‍රවාහන මාර්ග වාහනයක් වන අතර එය සාමාන්‍ය කාර් හෝ වෑන් වලට වඩා සැලකිය යුතු ප්‍රමාණයක් මගීන් රැගෙන යාම සඳහා නිර්මාණය කර ඇත.`


    },
    {
        id: '3',
        title: 'කාර්',
        imageUrl: `https://i.pinimg.com/564x/40/bd/6a/40bd6aebbb0694c502f1604f86e83184.jpg`,
        description: `කාර් එකක් (හෝ ඔටෝමොබයිල්) යනු ප්‍රවාහනය සඳහා භාවිතා කරන රෝද සහිත මෝටර් රථයකි. කාර් වල බොහෝ නිර්වචන වල කියවෙන්නේ ඒවා ප්‍රධාන වශයෙන් ධාවනය වන්නේ පාරවල් වල බවත්, එක් අයෙකු සිට අට දෙනෙකු දක්වා වාඩි වී සිටින බවත්, රෝද හතරක් ඇති බවත්, භාණ්ඩ වලට වඩා ප්‍රධාන වශයෙන් මිනිසුන් ප්‍රවාහනය කරන බවත් ය `

    },
    {
        id: '4',
        title: 'බළලා ',
        imageUrl: `https://i.pinimg.com/564x/56/ce/5c/56ce5cf1623e3ee5d53ca85d156fcc98.jpg`,
        description: `බළලා (ෆෙලිස් කැටස්) යනු කුඩා මාංශ භක්‍ෂක ක්ෂීරපායි විශේෂයක ගෘහාශ්‍රිත විශේෂයකි. ෆෙලිඩේ පවුලේ එකම ගෘහාශ්‍රිත විශේෂය එය වන අතර පවුලේ වනචරයින්ගෙන් වෙන්කර හඳුනා ගැනීම සඳහා ගෘහාශ්‍රිත බළලා ලෙස බොහෝ විට හඳුන්වනු ලැබේ. `

    },
    {
        id: '5',
        title: 'බල්ලා',
        imageUrl: `https://purewows3.imgix.net/images/articles/2019_04/smartest-dog-breeds-Border-Collie.jpg?auto=format,compress&cs=strip`,
        description: 'බල්ලා හෝ ගෘහාශ්‍රිත සුනඛයා (කැනිස් හුරුපුරුදු) යනු අළු වෘකයාගේ ගෘහාශ්‍රිත පරම්පරාවකි. එහි කැපී පෙනෙන ලක්‍ෂණ රාශියක් ඇති අතර ඒවායින් වඩාත් කැපී පෙනෙන්නේ වලිගය ඉහළට හැරීමයි. සුනඛයා බිහි වී ඇත්තේ පුරාණ වඳ වී ගිය වෘකයෙකුගෙනි',

    },
    {
        id: '6',
        title: 'අලියා',
        imageUrl: `https://i.pinimg.com/564x/4c/a7/5f/4ca75f57ffbb3e2e474fd3c76877c817.jpg`,
        description: 'දැනට සිටින විශාලතම ගොඩබිම සතුන් අලි ය. දැනට ජීවී විශේෂ තුනක් හඳුනාගෙන ඇත: අප්‍රිකානු පඳුරු අලියා, අප්‍රිකානු වනාන්තර අලියා සහ ආසියානු අලියා. ඔවුන් ප්‍රෝබෝසිඩියා නියෝගයේ එලිෆැන්ටයිඩේ පවුල තුළ අවිධිමත් ලෙස කණ්ඩායම්ගත කිරීමකි. එලිෆැන්ටයිඩේ යනු දැනට ඉතිරිව ඇති එකම ප්‍රොබොසිඩියන් පවුලයි; වඳ වී ගොස් ඇති සාමාජිකයින්ට මැස්ටෝඩෝන ඇතුළත් වේ.'

    },
    {
        id: '7',
        title: 'කොඩිය',
        imageUrl: `https://i.pinimg.com/564x/d3/51/49/d351497f93a06e031db47e272f901d0a.jpg`,
        description: '',

    },
    {
        id: '8',
        title: 'මිදි',
        imageUrl: `https://i.pinimg.com/564x/03/63/3d/03633dcc0bb16bf641a7dacb8ac79c9f.jpg`,
        description: '',

    },
    {
        id: '9',
        title: 'අශ්වයා',
        imageUrl: `https://i.pinimg.com/236x/30/2c/78/302c78e78ca9f284fa64c4c7e2d1da55.jpg`,
        description: '',

    },
    {
        id: '10',
        title: 'අයිස් ක්‍රීම්',
        imageUrl: `https://i.pinimg.com/564x/db/2c/c8/db2cc876babc8f8eb0226d3b92e9d901.jpg`,
        description: '',

    },
];



const Item = ({ title, imageUrl }) => (

    <View style={styles.item}>
        <Image
            style={styles.image}
            source={{
                uri: imageUrl,
            }}
        />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const SinhalaLanguage = () => {
    const navigation = useNavigation();
    // const renderItem = ({ item }) => (
    //     <Item title={item.title} imageUrl={item.imageUrl} />
    // );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={DATA}
                // renderItem={renderItem}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Word Details", item)}>
                        <Item title={item.title} imageUrl={item.imageUrl} description={item.description} />
                    </TouchableOpacity>
                )}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#f794ac",
    },
    item: {
        backgroundColor: '#FAFEFE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        flex: 1,
    },
});

export default SinhalaLanguage;