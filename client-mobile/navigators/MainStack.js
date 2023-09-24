import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import JobDetailsScreen from "../screens/JobDetailsScreen";

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
    </Stack.Navigator>
  );
};

export default MainStack;
