import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PencilSquareIcon, Bars3Icon } from "react-native-heroicons/solid";
import { GET_USER } from "../config/queries";

const UserDetailsScreen = ({ navigation }) => {
  // const { userId } = route.params; //???

  const [user, setUser] = useState({});
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      userId: userId,
    },
  });

  // console.log(data, "<<<<<<<<<<data");
  useEffect(() => {
    setUser(data?.user || {});
  }, [data]);

  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={50}
        source={require("../assets/images/background9.png")}
        className="absolute w-full h-full"
      />
      <ScrollView style={{ marginTop: 40, marginHorizontal: 20 }}>
        <View className="flex-row justify-between items-center">
          <View className="flex-row justify-start items-center gap-4">
            <Text className="text-3xl font-bold">Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate("UserEdit")}>
              <PencilSquareIcon size="27" stroke={50} color="black" />
            </TouchableOpacity>
          </View>
          <View
            className="rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.5)", padding: 8 }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Bars3Icon size="27" stroke={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-start gap-5 items-center mt-0.5">
          <View
            className="rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              padding: 8,
              borderColor: "white",
              borderWidth: 0.8,
            }}
          >
            <Image
              className="h-24 w-24 rounded-2xl"
              source={require("../assets/images/avatar.png")}
            />
          </View>
          <View className="flex justify-between gap-1">
            <Text className="text-xl font-bold">John Doe</Text>
            <Text className="text-md">087720008639</Text>
            <Text className="text-md">johndoe@gmail.com</Text>
            <Text className="text-md">JL. Dahlia No.12/D</Text>
          </View>
        </View>
        <View
          className="flex gap-1 mt-5 rounded-2xl ml-0.5"
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: 20,
            borderColor: "white",
            borderWidth: 0.8,
          }}
        >
          <Text className="text-md font-bold">Gender: Male</Text>
          <Text className="text-md font-bold">
            Birth Date: 08 November 1999
          </Text>
          <Text className="text-md font-bold">Profile Description:</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View
          className="flex gap-1 mt-5 rounded-2xl ml-0.5"
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: 20,
            borderColor: "white",
            borderWidth: 0.8,
          }}
        >
          <Text className="text-xl font-bold">Education</Text>
        </View>
        <View
          className="flex gap-1 mt-5 rounded-2xl ml-0.5"
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: 20,
            borderColor: "white",
            borderWidth: 0.8,
          }}
        >
          <Text className="text-xl font-bold">Reviews</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({});
