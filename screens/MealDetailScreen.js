import React, { useContext, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDesc from "../components/MealDesc";
import MealProcess from "../components/MealProcess";
import Icon from "../components/Icon";
import { FavouriteContext } from "../store/context/favourite-context";

const MealDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params;

  const meal = MEALS.find((meals) => meals.id === mealId);

  const favouriteContext = useContext(FavouriteContext);
  const isFavourite = favouriteContext.ids.find((id) => mealId == id);

  const favouriteMealHandler = () => {
    if (isFavourite) {
      favouriteContext.removeFavourite(mealId);
    } else {
      favouriteContext.addFavourite(mealId);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <Icon
          name={isFavourite ? "heart" : "heart-outline"}
          size={24}
          color="#eeeeee"
          onPress={favouriteMealHandler}
        />
      ),
    });
  }, [isFavourite]);

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
    paddingBottom: 60,
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
