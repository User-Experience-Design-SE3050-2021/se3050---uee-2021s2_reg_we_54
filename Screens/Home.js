import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>THisi s home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
