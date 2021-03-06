import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../assets/Constants/theme";
import { useRoute, useNavigation } from "@react-navigation/core";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DB from "../Config";
import LottieView from "lottie-react-native";

const Quiz = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const allQuestions = route.params.quizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const renderQuestion = () => (
    <View
      style={{
        marginVertical: 40,
      }}
    >
      {/* current question number  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
            opacity: 0.6,
            marginRight: 2,
          }}
        >
          {currentQuestionIndex + 1}
        </Text>
        <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
          / {allQuestions.length}
        </Text>
      </View>
      {/* current question content */}
      <Text
        style={{
          color: COLORS.white,
          fontSize: 30,
        }}
      >
        {allQuestions[currentQuestionIndex]?.question}
      </Text>
    </View>
  );

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex].correct_option;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  };

  const renderOptions = () => (
    <View>
      {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
        <TouchableOpacity
          onPress={() => validateAnswer(option)}
          disabled={isOptionsDisabled}
          key={index}
          style={{
            borderWidth: 3,
            borderColor:
              option == correctOption
                ? COLORS.success
                : option == currentOptionSelected
                ? COLORS.error
                : COLORS.secondary + "40",
            backgroundColor:
              option == correctOption
                ? COLORS.success + "20"
                : option == currentOptionSelected
                ? COLORS.error + "20"
                : COLORS.secondary + "20",
            height: 60,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

          {option === correctOption ? (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: COLORS.success,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="check"
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                }}
              />
            </View>
          ) : option === currentOptionSelected ? (
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: COLORS.error,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="close"
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                }}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderNextButton = () => (
    <TouchableOpacity
      onPress={handleNext}
      style={{
        marginTop: 20,
        width: "100%",
        backgroundColor: COLORS.accent,
        padding: 20,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}>
        Next
      </Text>
    </TouchableOpacity>
  );

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const restartQuiz = () => {
    setShowScoreModal(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);

    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });

  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  const exitButtonHandler = async () => {
    setIsLoading(true);
    const quizRef = DB.collection("quizes").doc(route.params.quizId);

    await quizRef.update({ isAttempted: true, marks: score });
    setIsLoading(false);
    navigation.navigate("QuizList");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        {/* render progress bar */}
        {renderProgressBar()}

        {/* render the question and the question number */}
        {renderQuestion()}

        {/* render annswers for the question */}
        {renderOptions()}

        {/* render next button */}
        {showNextButton && renderNextButton()}

        {/* model for score */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <LottieView
                style={{ height: 300, width: "100%" }}
                source={
                  score > allQuestions.length / 2
                    ? require("../assets/happyAnimation.json")
                    : require("../assets/sadAnimation.json")
                }
                loop={true}
                autoPlay
                speed={1}
              />
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 50,
                    color:
                      score > allQuestions.length / 2
                        ? COLORS.success
                        : COLORS.error,
                  }}
                >
                  {score + " "}
                </Text>
                <Text
                  style={{
                    fontSize: 50,
                    color: COLORS.black,
                  }}
                >
                  / {allQuestions.length}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* Retry Quiz button BEGINS*/}
                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    width: "50%",
                    borderRadius: 20,
                    margin: "1%",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.white,
                      fontSize: 20,
                    }}
                  >
                    Retry
                  </Text>
                </TouchableOpacity>
                {/* Retry Quiz button ENDS*/}

                {/* Exist Quiz button BEGINS */}

                <TouchableOpacity
                  onPress={exitButtonHandler}
                  disabled={isLoading}
                  style={{
                    backgroundColor: COLORS.accent,
                    padding: 20,
                    width: "50%",
                    borderRadius: 20,
                    margin: "1%",
                  }}
                >
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#fff" />
                  ) : (
                    <Text
                      style={{
                        textAlign: "center",
                        color: COLORS.white,
                        fontSize: 20,
                      }}
                    >
                      Exit
                    </Text>
                  )}
                </TouchableOpacity>
                {/* Exist Quiz button ENDS */}
              </View>
            </View>
          </View>
        </Modal>

        {/* backgroud image in bottom */}
        <Image
          source={require("../assets/DottedBG.png")}
          style={{
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
