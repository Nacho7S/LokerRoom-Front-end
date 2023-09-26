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
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../config/queries";
import SelectDropdown from "react-native-select-dropdown";

const JobAddFormScreen = ({ navigation }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    address: "",
    categoryId: 0,
    minSalary: "",
    maxSalary: "",
    requiredGender: "",
    maxAge: "",
    requiredEducation: "",
    isUrgent: "",
  });
  const [funcCreateJob, { loading, error, data }] = useMutation(ADD_JOB);

  const onChange = (key, value) => {
    console.log(key, value);
    setJob((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const createJob = () => {
    const payload = job;
    console.log(payload, "<<< payload");
    funcCreateJob({
      variables: {
        newJobPosting: { ...payload },
      },
    });
    // navigation.navigate("Login");
  };

  // if (loading) {
  //   return <Preloader />;
  // }

  // if (error) {
  //   return <ErrorData />;
  // }

  const gender = ["Male", "Female"];

  const category = [
    { name: "Construction", id: 1 },
    { name: "Factory & Industry", id: 2 },
    { name: "House Work", id: 3 },
    { name: "Office", id: 4 },
    { name: "Cooking", id: 5 },
    { name: "Cleaning", id: 6 },
    { name: "Utility", id: 7 },
  ];

  const education = ["SD", "SMK", "Diploma", "S1", "S2"];

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
            onChangeText={(text) => onChange("title", text)}
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
            onChangeText={(text) => onChange("description", text)}
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
            onChangeText={(text) => onChange("address", text)}
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

          {/* <InputField
            onChangeText={(text) => onChange("categoryId", text)}
            label={"Category"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          /> */}

          <InputField
            onChangeText={(text) => onChange("minSalary", text)}
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
            onChangeText={(text) => onChange("maxSalary", text)}
            label={"Maximum Salary"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          {/* <InputField
            onChangeText={(text) => onChange("requiredGender", text)}
            label={"Gender (Optional)"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          /> */}

          <InputField
            onChangeText={(text) => onChange("maxAge", text)}
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

          {/* <InputField
            onChangeText={(text) => onChange("requiredEducation", text)}
            label={"Education (Optional)"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          /> */}

          {/* <InputField
            onChangeText={(text) => onChange("isUrgent", text)}
            label={"Urgency Status"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          /> */}
          <SelectDropdown
            data={category.map((el) => el.name)}
            defaultButtonText="Choose a Category"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setJob({
                ...job,
                categoryId: index + 1,
              });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderColor: "#D5DDE5",
              borderWidth: 0.8,
              borderRadius: 20,
              marginBottom: 20,
              width: 200,
            }}
          />

          <SelectDropdown
            data={gender}
            defaultButtonText="Choose a Gender"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setJob({
                ...job,
                requiredGender: selectedItem,
              });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderColor: "#D5DDE5",
              borderWidth: 0.8,
              borderRadius: 20,
              marginBottom: 20,
              width: 200,
            }}
          />

          <SelectDropdown
            data={education}
            defaultButtonText="Choose Education"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setJob({
                ...job,
                requiredEducation: index + 1,
              });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderColor: "#D5DDE5",
              borderWidth: 0.8,
              borderRadius: 20,
              marginBottom: 20,
              width: 200,
            }}
          />

          <SelectDropdown
            data={["Urgent", "Not Urgent"]}
            defaultButtonText="Choose Urgency Status"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setJob({
                ...job,
                isUrgent: selectedItem === "Urgent" ? true : false,
              });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderColor: "#D5DDE5",
              borderWidth: 0.8,
              borderRadius: 20,
              marginBottom: 20,
              width: 200,
            }}
          />

          <CustomButton label={"Submit"} onPress={createJob} />
        </ScrollView>
        <View className="flex-row justify-between mx-8 mt-16 items-center"></View>
      </SafeAreaView>
    </View>
  );
};

export default JobAddFormScreen;
