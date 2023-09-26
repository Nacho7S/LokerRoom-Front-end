import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../config/queries";
import { useAuth } from "../context/useAuth";


const CustomDrawer = (props) => {
  const {logout} = useAuth()
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      userId: +userId,
    },
  });

  useEffect(() => {
    getUserId();
    setUser(data?.user || {});
  }, []);

  console.log(data, "<<<<<data di custom drawer");

  const getUserId = async () => {
    try {
      const IdUser = await AsyncStorage.getItem("userId");
      setUserId(IdUser);
      // console.log(IdUser, "<<<<<< IdUser");
    } catch (err) {
      console.log(err);
    }
  };

  const handelLogout = () => {
    logout()
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/images/background.png")}
          blurRadius={40}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              // fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}
          >
            {user?.name}
          </Text>
          {/* <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                // fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View> */}
        </ImageBackground>
        <View
          style={{
            flex: 1,
            // backgroundColor: "rgba(255,255,255,0.9)",
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handelLogout}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
