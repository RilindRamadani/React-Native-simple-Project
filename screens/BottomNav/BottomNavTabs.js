import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "../Drawer/DrawerNavigator";
const Tab = createBottomTabNavigator();
import images from "./../../assets/images.json";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";
import { HomeStackNavigator } from "../../App";

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: images.colors.red.solidRed,
        },

        drawerContentStyle: { backgroundColor: images.colors.red.solidRed },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: images.colors.black.solidBlack,
        drawerActiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="doubleleft" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
