import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import OverviewScreen from "./screens/OverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Category"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#393e46",
            },
            headerTintColor: "#eeeeee",
          }}
        >
          <stack.Screen name="Category" component={CategoryScreen} />
          <stack.Screen name="Overview" component={OverviewScreen} />
          <stack.Screen name="MealDetail" component={MealDetailScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
