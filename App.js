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
import StoryHome from "./Screens/StoryHome";
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
          <Stack.Screen name="StoryHome" component={StoryHome} options={{title:"Story List"}}/>
          <Stack.Screen name="StoryList" component={StoryList} />
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
