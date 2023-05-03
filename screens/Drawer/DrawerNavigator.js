import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../CategoriesScreen";
import CheckoutScreen from "../CheckoutScreen";
import { Ionicons } from "@expo/vector-icons";

import images from "./../../assets/images.json";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: images.colors.red.solidRed,
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "white",
        },
        drawerContentStyle: { backgroundColor: images.colors.red.solidRed },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: images.colors.black.solidBlack,
        drawerActiveBackgroundColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
