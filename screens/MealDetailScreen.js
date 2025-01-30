import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params;

  useEffect(() => {
    const meal = MEALS.find((meals) => meals.id === mealId);
    navigation.setOptions({ title: meal.title });
  }, []);
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen ID: {mealId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
