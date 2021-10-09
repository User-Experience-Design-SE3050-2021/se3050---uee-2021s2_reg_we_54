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
import Activity from "./Screens/Activity/Activity";
import Origami from "./Screens/Activity/Origami";
import CollageArt from "./Screens/Activity/CollageArt";
import ShowOrigami from "./Screens/Activity/ShowOrigami";
import ShowCollage from "./Screens/Activity/ShowCollage";

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
    <StoryStack.Screen name="" />
  </StoryStack.Navigator>
);

// FOR LANGUAGES
const LanguageScreens = () => (
  <LanguageStack.Navigator>
    <LanguageStack.Screen name="" />
  </LanguageStack.Navigator>
);

// FOR TASKS
const TaskScreens = () => (
  <TaskStack.Navigator>
    <TaskStack.Screen name="Activity" component={Activity} />
    <TaskStack.Screen name="Origami" component={Origami} />
    <TaskStack.Screen name="CollageArt" component={CollageArt} />
    <TaskStack.Screen name="ShowOrigami" component={ShowOrigami} />
    <TaskStack.Screen name="ShowCollage" component={ShowCollage} />
  </TaskStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Drawer.Navigator
          initialRouteName="QuizStack"
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
