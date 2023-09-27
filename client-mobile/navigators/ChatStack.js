import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import ChatScreens from '../screens/ChatScreen'

const Stack = createNativeStackNavigator()
export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ChatScreen' component={ChatScreens}/>
    </Stack.Navigator>
  )
}