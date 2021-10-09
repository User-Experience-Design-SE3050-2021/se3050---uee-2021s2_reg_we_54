import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import QuizList from "./Screens/QuizList";
import Language from "./Screens/Language"
import EnglishLanguage from "./Screens/EnglishLanguage";
import SinhalaLanguage from "./Screens/SinhalaLanguage";
import TamilLanguage from "./Screens/TamilLanguage";
import WordDetails from "./Screens/WordDetails"
import LanguageQuiz from "./Screens/LanguageQuiz"

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
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="English Learning" component={EnglishLanguage} />
          <Stack.Screen name="Sinhala Learning" component={SinhalaLanguage} />
          <Stack.Screen name="Tamil Learning" component={TamilLanguage} />
          <Stack.Screen name="Word Details" component={WordDetails} />
          <Stack.Screen name="Language Quiz" component={LanguageQuiz} />
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
