import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  BookmarkIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function JobDetailsScreen(props) {
  let item = props.route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-200">
      <Image
        source={require("../assets/images/background9.png")}
        blurRadius={100}
        className="absolute w-full h-full"
      />
      <Image
        style={{
          marginTop: 45,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderColor: "white",
          borderWidth: 1,
        }}
        source={require("../assets/images/sub-background3.png")}
        blurRadius={100}
        className="absolute w-full h-full"
      />
      <View className="flex-row justify-between mx-8 mt-20 items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          // className="bg-white rounded-2xl p-3 shadow"
        >
          <ChevronLeftIcon size="23" stroke={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
        //  className="bg-white rounded-2xl p-3 shadow"
        >
          <BookmarkIcon size="23" color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginTop: 3 }}>
        <View className="flex justify-center items-center">
          <Image className="h-24 w-24" source={item.image} />
          <Text className="text-2xl text-gray-800"> {item.name}</Text>
        </View>
        <View className="flex-row justify-between items-center mt-1 mx-8 h-20 overflow-hidden">
          <Animatable.View
            delay={180}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/calories.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">130 cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/clock.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">15-20 min</Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/chat.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">4.6 vote</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/weight.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">350 g</Text>
          </Animatable.View>
        </View>
        <View className="mx-8 space-y-3 h-48">
          <Animatable.Text
            animation="slideInUp"
            className="text-2xl font-semibold text-white"
          >
            Description
          </Animatable.Text>
          <Animatable.Text
            delay={100}
            animation="slideInUp"
            className="text-white tracking-wider"
          >
            {item.desc}
          </Animatable.Text>
        </View>
        {/* add to cart button */}
        <View className="mx-8 mt-2 mb-20 flex-row justify-between items-center">
          <Animatable.Text
            delay={100}
            animation="slideInLeft"
            className="text-2xl font-semibold text-white"
          >
            ${item.price}/hour
          </Animatable.Text>
          <Animatable.View delay={100} animation="slideInRight">
            <TouchableOpacity className="bg-gray-500 py-3 px-6 rounded-2xl">
              <Text className="text-white text-s font-semibold">Accept</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
      <View className="flex-row justify-between mx-8 mt-16 items-center"></View>
    </View>
  );
}
