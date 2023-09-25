import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import InputField from "../components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import CustomButton from "../components/CustomButton";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  BookmarkIcon,
} from "react-native-heroicons/outline";

const JobEditFormScreen = ({ navigation }) => {
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 25 }}
        >
          <View className="flex-row justify-start items-center">
            <View className="mt-3 items-center">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-white rounded-2xl p-2 shadow"
              >
                <ChevronLeftIcon size="23" stroke={50} color="black" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                // fontFamily: "Roboto-Medium",
                fontSize: 28,
                fontWeight: "bold",
                color: "#333",
                marginBottom: 30,
                marginTop: 40,
                marginLeft: 15,
              }}
            >
              Edit Job Details
            </Text>
          </View>

          <InputField
            label={"Title"}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Description"}
            icon={
              <Feather
                name="phone"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            // keyboardType="phone-number"
          />

          <InputField
            label={"Address"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={"Category"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Minimum Salary"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Gender (Optional)"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Maximum Age (Optional)"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            label={"Education (Optional)"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <CustomButton label={"Submit"} onPress={() => {}} />
        </ScrollView>
        <View className="flex-row justify-between mx-8 mt-16 items-center"></View>
      </SafeAreaView>
    </View>
  );
};

export default JobEditFormScreen;
