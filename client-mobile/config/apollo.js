import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_URL } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const access_token = await AsyncStorage.getItem('access_token');
  // console.log(access_token, '<<< In Apollo');
  if (access_token) {
    return {
      headers: {
        ...headers,
        access_token: access_token
      }
    }
  } else {
    return { headers }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
