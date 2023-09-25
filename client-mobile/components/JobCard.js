import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { EyeIcon } from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function JobCard({ item, index, axis }) {
  console.log(item, "<<<<<<<<<<item");
  const navigation = useNavigation();
  // const getBackgroundColor = () => {
  //   switch (item?.category?.name) {
  //     case "construction":
  //       return "rgba(212,246,237,0.6)";
  //     case "renovation":
  //       return "rgba(251,226,244,0.6)";
  //     case "electrical":
  //       return "rgba(227,219,250,0.6)";
  //     case "carpentry":
  //       return "rgba(255,225,204,0.6)";
  //     default:
  //       return "rgba(212, 246, 237, 0.6)"; // Default color
  //   }
  // };
  const getAxis = () => {
    switch (axis) {
      case "vertical":
        return "w-72 h-72 p-3 mb-4 rounded-3xl";
      case "horizontal":
        return "w-72 h-72 p-3 ml-4 rounded-3xl";
      default:
        return "w-72 h-72 p-3 mb-4 rounded-3xl"; // Default axis
    }
  };
  const getStatusColor = () => {
    switch (item.status) {
      case "Accepted":
        return "bg-lime-300 text-gray-700 px-3 py-1.5 rounded-full";
      case "Processed":
        return "bg-teal-300 text-gray-700 px-3 py-1.5 rounded-full";
      default:
        return "bg-lime-300 text-gray-700 px-3 py-1.5 rounded-full"; // Default axis
    }
  };
  return (
    <Animatable.View
      delay={index * 180}
      animation="slideInRight"
      className={getAxis()}
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderColor: "#D5DDE5",
        borderWidth: 0.8,
      }}
    >
      <View
        className="w-64 h-52 mx-4 mt-4 rounded-3xl absolute"
        // style={{ backgroundColor: getBackgroundColor() }}
      ></View>
      <View className="flex-row mt-5 justify-between items-center px-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("FoodDetails", { ...item })}
          className="bg-white px-3 py-1.5 rounded-full"
        >
          <Text className="text-xs">Urgent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("FoodDetails", { ...item })}
          className="bg-white px-3 py-1.5 rounded-full"
        >
          <Text className="text-xs">29 Sept, 2023</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-column mt-3 justify-center">
        <Text className="text-black px-4 text-xl font-medium tracking-wider">
          {item.title}
        </Text>
        <View className="flex-row mx-1.5 space-y-2 justify-between">
          <Text className="text-gray-500 pl-3">{item.text}</Text>
          <Image source={item.image} className="h-20 w-20" />
        </View>
      </View>
      <View className="flex-row mt-12 justify-between items-center px-4">
        <View>
          <Text className="text-xs font-semibold text-gray-200">
            Bandung, Indonesia
          </Text>
          <Text className="text-base font-bold text-black">
            ${item.price}/hour
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("JobDetails", { ...item })}
          className="bg-black px-3 py-2.5 rounded-full"
        >
          <Text className="text-white">See Details</Text>
        </TouchableOpacity>
      </View>
      {axis === "horizontal" ? (
        <View className="mt-6 mx-10 flex justify-center items-center">
          <Text className={getStatusColor()}>{item.status}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </Animatable.View>
  );
}
