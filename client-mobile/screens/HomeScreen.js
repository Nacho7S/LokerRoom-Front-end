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
} from "react-native-heroicons/solid";
// import { categories, jobItems } from "../constants";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import JobCard from "../components/JobCard";
import JobFilterModal from "../components/JobFilterModal";
import {
  GET_CATEGORIES_AND_EDUCATION_LEVELS,
  GET_JOBS,
  // GET_JOBS_CATEGORIES,
} from "../config/queries";
import { useQuery } from "@apollo/client";

const HomeScreen = ({ navigation }) => {

  const [ showModal, setShowModal ] = useState(false);
  const [ filter, setFilter ] = useState({
    gender: null, 
    maxAge: null, 
    categoryId: null, 
    educationId: null,
    location: null, 
    isUrgent: null, 
    pageNumber: 1
  });

  const { data: fetch } = useQuery(GET_CATEGORIES_AND_EDUCATION_LEVELS);
  const { data, error, loading } = useQuery(GET_JOBS, {
    variables: filter
  });
  const { categories, educationLevels } = fetch || {};
  const { jobPostings: { data: jobPostings, numPages } = {} } = data || {};
  // console.log(categories, "<<< Fetching categories");
  // console.log(jobPostings, "<<< FETCHING JOBS");

  if (loading) {
    return null;
  }
  if (error) {
    console.log(error);
    return null;
  }

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex-1">
        {/* title */}
        <View className="mt-9 space-y-2 flex-row justify-between items-center">
          <Text className="mx-6 text-3xl font-bold text-gray-800">
            Jobs List
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
        <View className="mt-2 mx-5 flex-row justify-between items-center space-x-3">
          <View className="flex-row flex-1 px-4 py-2 bg-white rounded-2xl">
            <MagnifyingGlassIcon stroke={40} color="gray" />
            <TextInput
              placeholder="Food"
              value="Search"
              className="ml-2 text-gray-800"
            />
          </View>
          <View className="bg-white rounded-2xl px-4 py-2">
            <AdjustmentsHorizontalIcon 
              size="29" 
              stroke={40} 
              color="black" 
              onPressIn={() => {
                setShowModal(true);
              }}
            />
          </View>
        </View>

        {/* categories scrollbar */}
        <ScrollView
          className="mt-3 max-h-12"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories?.map((category, index) => {
            let isActive = category.id === filter.categoryId;
            let textClass = isActive ? " font-bold" : "";
            return (
              <Animatable.View
                delay={index * 180} // delay for each item
                animation="slideInDown" // animation type
                key={index}
              >
                <TouchableOpacity
                  className="mr-9"
                  onPress={() => setFilter({
                    ...filter,
                    categoryId: category.id
                  })}
                >
                  <Text
                    className={
                      "text-white text-base tracking-widest " + textClass
                    }
                  >
                    {category.name}
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
        {/* job cards */}
        <ScrollView
          className="h-32"
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          {jobPostings?.map((item, index) => (
            <JobCard item={item} index={index} key={index} />
          ))}
        </ScrollView>
        <View className="flex-row justify-between mx-8 mt-16 items-center"></View>

        <JobFilterModal 
          state={[filter, setFilter]}
          categories={categories}
          educationLevels={educationLevels}
          show={showModal}
          handleClose={() => {
            setShowModal(false);
          }}
        />

      </SafeAreaView>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
