import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import JobDetailsScreen from "../screens/JobDetailsScreen";
import JobAddFormScreen from "../screens/JobAddFormScreen";
import UserEditDetailsScreen from "../screens/UserEditDetailsScreen";
import JobEditFormScreen from "../screens/JobEditFormScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobDetails"
        options={{ headerShown: false }}
        component={JobDetailsScreen}
      />
      <Stack.Screen
        name="JobAdd"
        options={{ headerShown: false }}
        component={JobAddFormScreen}
      />
      <Stack.Screen
        name="JobEdit"
        options={{ headerShown: false }}
        component={JobEditFormScreen}
      />
      <Stack.Screen
        name="UserEdit"
        options={{ headerShown: false }}
        component={UserEditDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
