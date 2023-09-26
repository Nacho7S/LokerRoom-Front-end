import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an AuthContext
const AuthContext = createContext();

// Custom hook for using the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Check if the user is logged in based on the presence of an access token
  const checkLoginStatus = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("access_token");
      setIsLogged(accessToken !== null);
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const login = async (accessToken) => { // Add the login function
    try {
      await AsyncStorage.setItem("access_token", accessToken);
      setIsLogged(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Logout function to clear the access token
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("access_token");
      setIsLogged(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Provide the value to the context
  const authContextValue = {
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
