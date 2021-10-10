import React from "react";
import { 
    View,
    TouchableOpacity,
    Text,
    Image
 } from "react-native"; 
import { Icon } from "react-native-elements/dist/icons/Icon";

 const StoryCard = ({containerStyle,storyItem, onPress})=>{
    return(
        <TouchableOpacity
        style={{
            flexDirection:'row',
            alignItems:'center',
            padding:10,
            marginTop:10,
            borderRadius: 12,
            backgroundColor:'#70DBDB',
            ...containerStyle
        }}
            onPress={onPress}
        >
            <Image 
                source={{
                uri: storyItem.image
                  }}
                resizeMode ="cover"
                style={{
                    width:100,
                    height:100,
                    borderRadius:12
                }}
            />
            <View
            style={{
                width: '55%',
                paddingHorizontal:30,
                paddingVertical:30
            }}
            >
            <Text
                style={{
                    flex:1,
                    fontSize:22,
                    
                    lineHeight: 30
                }}
            >{storyItem.name}</Text>
            

            </View>
            
        </TouchableOpacity>
    )

 }
 export default StoryCard;