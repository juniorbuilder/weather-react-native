import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import LoginScreen from "../views/LoginScreen";
import ForecastScreen from "../views/ForecastScreen";
import CustomHeader from "../components/CustomHeader";

const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forecast"
          component={ForecastScreen}
          options={{ header: CustomHeader, headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
