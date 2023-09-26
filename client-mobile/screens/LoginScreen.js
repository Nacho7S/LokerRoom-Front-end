import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { LOGIN_USER } from "../config/queries";
import { useMutation } from "@apollo/client";

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    telephone: "",
    password: "",
  });
  const [funcLoginUser, { loading, error, data }] = useMutation(LOGIN_USER);

  const onChange = (key, value) => {
    // console.log(key, value);
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const loginUser = async () => {
    try {
      // const payload = user;
      console.log(user, "<<< payload");
      await funcLoginUser({
        variables: {
          loginCredentials: {
            telephone: user.telephone,
            password: user.password
          },
        },
      });      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('Data changed');
    (async () => {
      if (data?.login) {
        await AsyncStorage.setItem("access_token", data.login.access_token);
        await AsyncStorage.setItem("userId", JSON.stringify(data.login.userId));
      }
    })();
  }, [data]);

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            {/* <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          /> */}
          </View>

          <Text
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 28,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Login
          </Text>

          <InputField
            onChangeText={(text) => onChange("telephone", text)}
            label={"Phone Numbers"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            onChangeText={(text) => onChange("password", text)}
            label={"Password"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {}}
          />

          <CustomButton label={"Login"} onPress={loginUser} />

          <Text
            style={{ textAlign: "center", color: "white", marginBottom: 30 }}
          >
            Or, login with ...
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Text>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                {" "}
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
