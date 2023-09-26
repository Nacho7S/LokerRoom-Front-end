import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import DatePicker from "react-native-date-picker";

import InputField from "../components/InputField";
import SelectDropdown from "react-native-select-dropdown";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import CustomButton from "../components/CustomButton";
import { ADD_USER, EDIT_USER } from "../config/queries";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserEditDetailScreen = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const navigation = useNavigation();

  let item = props.route.params;

  const [user, setUser] = useState({
    address: item?.address || "",
    educationId: item?.educationId || 1,
    profileDescription: item?.profileDescription || "",
    imgUrl: item?.imgUrl || "",
  });
  const [funcEditUser, { loading, error, data }] = useMutation(EDIT_USER, {
    context: {
      headers: {
        access_token: accessToken,
      },
    },
  });

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      setAccessToken(access_token);
      console.log(access_token, "<<<<<< access token");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (key, value) => {
    console.log(key, value);
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const editUser = () => {
    const payload = user;
    console.log(payload, "<<< payload");
    funcEditUser({
      variables: {
        userDetails: payload,
      },
    });
    // navigation.navigate("Login");
  };

  const education = ["SD", "SMK", "Diploma", "S1", "S2"];

  // if (loading) {
  //   return <Preloader />;
  // }

  // if (error) {
  //   return <ErrorData />;
  // }

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
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 30,
              marginTop: 50,
            }}
          >
            Edit Profile
          </Text>

          <InputField
            onChangeText={(text) => onChange("address", text)}
            value={user.address}
            label={"Address"}
            icon={
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <InputField
            onChangeText={(text) => onChange("profileDescription", text)}
            value={user.profileDescription}
            label={"Profile Description"}
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
            onChangeText={(text) => onChange("imgUrl", text)}
            value={user.imgUrl}
            label={"Image Url"}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <SelectDropdown
            data={education}
            defaultButtonText={
              education[user.educationId] || "Choose Education"
            }
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

          {/* <Button title="Select Date of Birth" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}

          {/* <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 30,
            }}
          >
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
                {dobLabel}
              </Text>
            </TouchableOpacity>
          </View> */}

          {/* <DatePicker
          modal
          open={open}
          date={date}
          mode={"date"}
          maximumDate={new Date("2005-01-01")}
          minimumDate={new Date("1980-01-01")}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

          <CustomButton label={"Edit Profile"} onPress={editUser} />
        </ScrollView>
        <View className="flex-row justify-between mx-8 mt-16 items-center"></View>
      </SafeAreaView>
    </View>
  );
};

export default UserEditDetailScreen;
