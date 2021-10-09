import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizListData from "../QuizList.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DB from "../Config";
LogBox.ignoreLogs(["Setting a timer"]);

const QuizList = () => {
  const navigation = useNavigation();

  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    return DB.collection("quizes").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setTimeout(() => {
        setQuizList(postData);
      }, 100);
    });
  }, []);

  const renderItem = (item, index) => (
    <Item
      title={item.quizTitle}
      index={index}
      data={item.quizData}
      isAttempted={item.isAttempted}
      marks={item.marks}
      quizId={item.id}
    />
  );

  const Item = ({ title, index, data, isAttempted, marks, quizId }) => (
    <TouchableOpacity
      style={isAttempted ? styles.item : styles.itemAttempted}
      onPress={() =>
        navigation.navigate("Quiz", {
          quizData: data,
          quizId,
        })
      }
    >
      <View
        style={{
          width: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <FontAwesome name="quora" style={{ color: "white", fontSize: 20 }} />
        <Text style={{ color: "white", fontSize: 18 }}>{index + 1}</Text>
      </View>
      <Text
        style={{
          width: "80%",
          textAlign: "center",
          fontSize: 21,
          color: "white",
        }}
      >
        {title}
      </Text>

      {isAttempted ? (
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              // width: "10%",
              // textAlign: "right",
            }}
          >
            {marks + "/" + data.length}
          </Text>
        </View>
      ) : (
        <MaterialCommunityIcons
          style={{
            color: "white",
            fontSize: 30,
            width: "10%",
            textAlign: "right",
          }}
          name="chevron-right"
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      {!quizList.length > 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          // data={QuizListData.data}
          data={quizList}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default QuizList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#223860",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: "93%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  loadingContainer: {
    justifyContent: "center",
    height: "100%",
  },
  itemAttempted: {
    backgroundColor: "#551A8B",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: "93%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
});
