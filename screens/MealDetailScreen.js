import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDesc from "../components/MealDesc";
import MealProcess from "../components/MealProcess";
import Icon from "../components/Icon";

const MealDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params;

  const meal = MEALS.find((meals) => meals.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => <Icon name="heart" size={24} color="#eeeeee" />,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDesc
          affordability={meal.affordability}
          complexity={meal.complexity}
          duration={meal.duration}
        />
        <MealProcess title="Ingredients" keypoints={meal.ingredients} />
        <MealProcess title="Steps" keypoints={meal.steps} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#222831",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#eeeeee",
    textAlign: "center",
  },
});

export default MealDetailScreen;
