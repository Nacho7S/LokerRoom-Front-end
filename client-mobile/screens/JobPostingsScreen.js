import {
  Image,
  ImageBackground,
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
  PlusIcon,
} from "react-native-heroicons/solid";
import { categories, jobItems } from "../constants";
import { useState } from "react";
import JobCard from "../components/JobCard";

const JobPostingScreen = ({ navigation }) => {
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
        <View className="mt-9 space-y-2 flex-row justify-between items-center">
          <Text className="mx-6 text-3xl font-bold text-gray-800">
            Created Jobs List
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/avatar.png")}
              style={{
                width: 45,
                height: 45,
                marginRight: 23,
                marginBottom: 2,
              }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        {/* search  */}
        <View className="mt-4 mb-5 mx-5 flex-row justify-between items-center space-x-3">
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

        {/* add job button */}
        <TouchableOpacity onPress={() => navigation.navigate("JobAdd")}>
          <View
            className="bg-white rounded-2xl px-24 py-2 mx-5 mb-5 flex-row justify-evenly items-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderColor: "white",
              borderWidth: 0.8,
            }}
          >
            <PlusIcon size="22" stroke={40} color="black" />
            <Text className="font-bold">Create a Job</Text>
          </View>
        </TouchableOpacity>

        {/* categories scrollbar */}
        {/* <ScrollView
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
        </ScrollView> */}
        {/* food cards */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {jobItems.map((item, index) => (
            <JobCard
              item={item}
              index={index}
              key={index}
              axis={"horizontal"}
              isEdit={true}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default JobPostingScreen;

const styles = StyleSheet.create({});
