import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "./screens/CategoryScreen";
import OverviewScreen from "./screens/OverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouriteContextProvider from "./store/context/favourite-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  const stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#393e46",
          },
          drawerStyle: {
            backgroundColor: "#393e46",
          },
          drawerLabelStyle: {
            color: "#eeeeee",
          },
          drawerActiveTintColor: "#00adb5",
          headerTintColor: "#eeeeee",
        }}
      >
        <Drawer.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="category" size={24} color="#eeeeee" />
            ),
          }}
        />
        <Drawer.Screen
          name="favourite"
          component={FavouriteScreen}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="favorite" size={24} color="#eeeeee" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <FavouriteContextProvider>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#393e46",
              },
              headerTintColor: "#eeeeee",
            }}
          >
            <stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <stack.Screen name="Overview" component={OverviewScreen} />
            <stack.Screen name="MealDetail" component={MealDetailScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
