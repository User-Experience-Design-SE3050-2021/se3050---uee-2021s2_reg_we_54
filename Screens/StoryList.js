import React from "react";
import { View ,Image, SafeAreaView, StyleSheet, Text, ScrollView} from "react-native";
import { Icon } from 'react-native-elements';
import { Colors } from "react-native/Libraries/NewAppScreen";
import storyList from "./dummyData"; 

const StoryList = ({route})=>{
  console.log(route.params.data, "FFFFFFFFFFFFFFFFFFF");
  return(
<SafeAreaView style = {{backgroundColor : Colors.white}}>
    {/* <View style={style.header}>
    <Text style={{fontSize:20, fontWeight:'bold'}}>Story</Text>
    </View> */}
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{justifyContent:'center', alignItems:"center", height:280}}>
      <Image
        style={{height:250, width:330, borderRadius:30}}
        source={{
          uri: route.params.data.image
        }}
      />
      </View>
      <View style={style.details}>
        <View style={{flexDirection:'row', justifyContent:'space-between','alignItems':'center',}}>
          <Text style={{fontSize:25, fontWeight:'bold', color:Colors.white}}>{route.params.data.name}</Text>
          <View style={style.iconContainer}>
          <Icon name="heart-outline" type="ionicon" color={Colors.primary} size={25} />
          </View>
        </View>
        <Text style={style.detailsText}>
        {route.params.data.desc}
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default StoryList;

const style = StyleSheet.create({
  header:{
    paddingVertical : 20,
    flexDirection:'row',
    alignItems: 'center',
  },
  details:{
      paddingHorizontal:20,
      paddingTop:40,
      paddingBottom:60,
      backgroundColor: Colors.primary,
      borderTopRightRadius:40,
      borderTopLeftRadius:40,
  },
  iconContainer:{
    backgroundColor:Colors.white,
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:"center",
    borderRadius:30,
  },
  detailsText:{
    marginTop:10,
    lineHeight:22,
    fontSize:16,
    color:Colors.white,
    justifyContent:'center',
  }
})
