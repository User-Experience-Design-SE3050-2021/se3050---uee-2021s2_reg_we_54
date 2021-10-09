import React from "react";
import { StyleSheet, View, BackHandler, Alert, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

const DrawerContent = (props) => {
  const handlerBackButton = () => {
    Alert.alert(
      "Are you sure want to exit?",
      "",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );
    return true;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* top header section BEGINS */}
          <View style={styles.userInfoSection}>
            <Image
              source={require("../assets/adaptive-icon.png")}
              style={{ height: 150, width: "100%", resizeMode: "cover" }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: "25%",
              }}
            >
              Easy Kids Learning
            </Text>
          </View>
          {/* top header section ENDS */}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <IconEntypo name="language" color={color} size={size} />
              )}
              label="Languages"
              onPress={() => {
                props.navigation.navigate("LanguageStack");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconFontAwesome name="book" color={color} size={size} />
              )}
              label="Stories"
              onPress={() => {
                props.navigation.navigate("StoryStack");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconFontAwesome name="quora" color={color} size={size} />
              )}
              label="Quizes"
              onPress={() => {
                props.navigation.navigate("QuizStack");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <IconFontAwesome5 name="tasks" color={color} size={size} />
              )}
              label="Tasks"
              onPress={() => {
                props.navigation.navigate("TaskStack");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple>
              <View style={styles.preference}>
                <Text>Sounds</Text>
                <View pointerEvents="none">
                  <Switch value={true} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Exit"
          onPress={handlerBackButton}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

export { DrawerContent };

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    height: "25%",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 40,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
