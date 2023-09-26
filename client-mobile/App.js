import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTab from "./navigators/MainTab";
import MainStack from "./navigators/MainStack";
import AppStack from "./navigators/AppStack";
import AuthStack from "./navigators/AuthStack";
import RootNavigator from "./navigators/RootNavigator";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
