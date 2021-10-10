import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import{
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import storyList from "./dummyData";
import StoryCard from "./StoryCard";
const StoryHome = ({navigation})=>{
    function renderHeader(){
        return(
            <View 
            style={{
                flexDirection:'row',
                marginHorizontal:24,
                alignItems:'center',
                height:88,
                color:'#BFEFFF'
            }}>
                <View 
                style={{
                    flex:1,
                }}>
                    <Text
                    style={{
                        
                        fontSize:33,
                        lineHeight:33
                    }}>Story List</Text>
                    <Text
                     style={{
                         marginTop:3,
                         fontSize:16,
                        lineHeight:22
                     }}
                    >What you want to read today?</Text>
                </View>
            </View>
        )
    }

    function renderFav(){
        return(
            <View
            style={{
                flexDirection:'row',
                marginTop:24,
                marginBottom:20,
                marginHorizontal:24,
                borderRadius:18,
                backgroundColor:'#E0EEEE'
            }}
            >
                <View
                style={{
                    width:100,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <Image 
                    source={{
                        uri: 'https://i.ibb.co/fpcGYfQ/depositphotos-122056114-stock-illustration-cartoon-fish-under-the-sea.jpg'
                          }}
                    style={{
                        width:88,
                        height:80           
                    }}/>
                </View>
                    <View
                    style={{
                        flex:1,
                        paddingVertical:26
                        
                    }}
                    >
                        <TouchableOpacity onPress={() => {}}>
                        <Text
                        style={{
                        width:'100%',
                        fontSize:20 , 
                        lineHeight: 22
                    }}
                    > See your favourites</Text>
                        </TouchableOpacity>
                    
                    </View>
            </View>
        )
    }
    return(
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor:"#BFEFFF"
        }}>
            <FlatList
            data={storyList}
            keyExtractor={item => `${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View>
                    {renderHeader()}
                    {renderFav()}
                </View>
            }
            renderItem={({item}) => {
                return(
                   <StoryCard
                   containerStyle={{
                       marginHorizontal:24
                   }}
                   storyItem = {item}
                   onPress={() => navigation.navigate("StoryList", {
                       data: item
                   })}
                   />
                )
        
            }}
            />

        </SafeAreaView>
    )
}

export default StoryHome;