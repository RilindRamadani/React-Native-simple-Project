import { StatusBar } from "expo-status-bar";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MyTabs from "./screens/BottomNav/BottomNavTabs";

import images from "./assets/images.json";
import { Provider } from "react-redux";
import store from "./store/store";

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: images.colors.red.solidRed,
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={{
          title: "Meals Overview",
        }}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={{
          title: "About the Meal",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer
        screenOptions={{
          headerStyle: {
            backgroundColor: images.colors.red.solidRed,
          },
          headerTintColor: "white",
          sceneContainerStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export { HomeStackNavigator };
