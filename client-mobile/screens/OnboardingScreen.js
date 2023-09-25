import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 60,
              color: "#20315f",
              marginLeft: 25,
            }}
          >
            Your Solution For Many Services
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: "white",
              marginLeft: 25,
              marginTop: 15,
            }}
          >
            Hire, Done, Thrive!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 20,
            width: "90%",
            borderRadius: 20,
            marginTop: 40,
            marginBottom: 50,
            marginLeft: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "rgba(255,255,255,0.3)",
            borderColor: "#D5DDE5",
            borderWidth: 0.8,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default OnboardingScreen;
