import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import QuizList from "./Screens/QuizList";
import StoryList from "./Screens/StoryList";
import Activity from "./Screens/Activity/Activity";
import Origami from "./Screens/Activity/Origami";
import CollageArt from "./Screens/Activity/CollageArt";
import ShowOrigami from "./Screens/Activity/ShowOrigami";
import ShowCollage from "./Screens/Activity/ShowCollage";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="QuizList" component={QuizList} />
          <Stack.Screen name="StoryList" component={StoryList} />
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Origami" component={Origami} />
          <Stack.Screen name="CollageArt" component={CollageArt} />
          <Stack.Screen name="ShowOrigami" component={ShowOrigami} />
          <Stack.Screen name="ShowCollage" component={ShowCollage} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
