import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

function notLogged() {
  return <AuthStack />;
}

function Logged() {
  return <AppStack />;
}

export default function RootNavigator() {
  const [isLogged, setIslogged] = useState("");

  // useEffect(() => {
  //   gettoken();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      gettoken();
    }, [])
  );

  const gettoken = async () => {
    try {
      const accessToken = JSON.parse(
        await AsyncStorage.getItem("access_token")
      );
      console.log(accessToken, "<<<");
      setIslogged(accessToken);
    } catch (err) {
      console.log(err);
    }
  };
  return <>{isLogged ? <Logged /> : notLogged()}</>;
}
