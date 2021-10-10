import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./Drawer/DrawerContent";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./Screens/Home";
import QuizList from "./Screens/QuizList";
import Quiz from "./Screens/Quiz";
import StoryList from "./Screens/StoryList";
import StoryHome from "./Screens/StoryHome";

import Activity from "./Screens/Activity/Activity";
import Origami from "./Screens/Activity/Origami";
import CollageArt from "./Screens/Activity/CollageArt";
import ShowOrigami from "./Screens/Activity/ShowOrigami";
import ShowCollage from "./Screens/Activity/ShowCollage";
import Language from "./Screens/Language";
import EnglishLanguage from "./Screens/EnglishLanguage";
import SinhalaLanguage from "./Screens/SinhalaLanguage";
import TamilLanguage from "./Screens/TamilLanguage";
import WordDetails from "./Screens/WordDetails";
import FavoriteWord from "./Screens/FavoriteWord";
import FavoriteWordInfo from "./Screens/FavoriteWordInfo";

const LanguageStack = createStackNavigator();
const StoryStack = createStackNavigator();
const TaskStack = createStackNavigator();
const QuizStack = createStackNavigator();
const Drawer = createDrawerNavigator();

// FOR QUIZES
const QuizStackScreens = ({ navigation }) => (
  <QuizStack.Navigator>
    <QuizStack.Screen
      name="QuizList"
      component={QuizList}
      options={{
        title: "Quiz List",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFF"
            color="black"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
    <QuizStack.Screen
      name="Quiz"
      component={Quiz}
      options={{ headerShown: false }}
    />
  </QuizStack.Navigator>
);

// FOR STORIES
const StoryScreens = () => (
  <StoryStack.Navigator>
    <StoryStack.Screen name="QuizList" component={QuizList} />
    <StoryStack.Screen name="StoryHome" component={StoryHome} options={{title:"Story List"}}/>
    <StoryStack.Screen name="StoryList" component={StoryList} />
  </StoryStack.Navigator>
);

// FOR LANGUAGES
const LanguageScreens = ({ navigation }) => (
  <LanguageStack.Navigator>
    <LanguageStack.Screen
      name="Language"
      component={Language}
      options={{
        title: "Language Learning",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFF"
            color="black"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
    <LanguageStack.Screen name="English Learning" component={EnglishLanguage} />
    <LanguageStack.Screen name="Sinhala Learning" component={SinhalaLanguage} />
    <LanguageStack.Screen name="Tamil Learning" component={TamilLanguage} />
    <LanguageStack.Screen name="Word Details" component={WordDetails} />
    <LanguageStack.Screen name="Favorite Word" component={FavoriteWord} />
    <LanguageStack.Screen
      name="Favorite WordInfo"
      component={FavoriteWordInfo}
    />
  </LanguageStack.Navigator>
);

// FOR TASKS
const TaskScreens = ({ navigation }) => (
  <TaskStack.Navigator>
    <TaskStack.Screen
      name="Activity"
      component={Activity}
      options={{
        title: "Quiz List",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFF"
            color="black"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
    <TaskStack.Screen name="Origami" component={Origami} />
    <TaskStack.Screen name="CollageArt" component={CollageArt} />
    <TaskStack.Screen name="Show Origami" component={ShowOrigami} />
    <TaskStack.Screen name="Show Collage" component={ShowCollage} />
  </TaskStack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Drawer.Navigator
          initialRouteName="LanguageStack"
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            name="LanguageStack"
            component={LanguageScreens}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="StoryStack"
            component={StoryScreens}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="QuizStack"
            component={QuizStackScreens}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="TaskStack"
            component={TaskScreens}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
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
