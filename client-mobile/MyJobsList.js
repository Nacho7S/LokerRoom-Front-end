import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { categories, foodItems } from "../constants";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import FoodCard from "../components/JobCard";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex-1">
        {/* punch line */}
        <View className="mt-9 space-y-2">
          <Text className="mx-6 text-3xl font-bold text-gray-800">
            Jobs List
          </Text>
        </View>

        {/* search  */}
        <View className="mt-4 mx-5 flex-row justify-between items-center space-x-3">
          <View className="flex-row flex-1 px-4 py-2 bg-white rounded-2xl">
            <MagnifyingGlassIcon stroke={40} color="gray" />
            <TextInput
              placeholder="Food"
              value="Search"
              className="ml-2 text-gray-800"
            />
          </View>
          <View className="bg-white rounded-2xl px-4 py-2">
            <AdjustmentsHorizontalIcon size="29" stroke={40} color="black" />
          </View>
        </View>

        {/* categories scrollbar */}
        <ScrollView
          className="pt-5 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = isActive ? " font-bold" : "";
            return (
              <Animatable.View
                delay={index * 180} // delay for each item
                animation="slideInDown" // animation type
                key={index}
              >
                <TouchableOpacity
                  className="mr-9"
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    className={
                      "text-white text-base tracking-widest " + textClass
                    }
                  >
                    {category}
                  </Text>
                  {isActive ? (
                    <View className="flex-row justify-center">
                      <Image
                        source={require("../assets/images/line.png")}
                        className="h-4 w-5"
                      />
                    </View>
                  ) : null}
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </ScrollView>
        {/* food cards */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {foodItems.map((item, index) => (
            <FoodCard item={item} index={index} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
