import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const CategoryDetailsScreen = ({ route }) => {
  const { categoryId, title } = route.params;
  const navigation = useNavigation();

  const navigateToMealDetail = (mealId) => {
    navigation.navigate("MealDetail", { mealId });
  };

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={MEALS.filter(
          (item) => item.categoryIds.findIndex((id) => id === categoryId) >= 0
        )}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={styles.container}>
            <Pressable
              android_ripple={{ color: "#393e46" }}
              onPress={() => navigateToMealDetail(itemData.item.id)}
            >
              <Image
                style={styles.imageStyle}
                source={{ uri: itemData.item.imageUrl }}
              />
              <Text style={styles.title}>{itemData.item.title}</Text>
              <View style={styles.descContainer}>
                <Text style={styles.descTextStyle}>
                  AFFORDABILITY: {itemData.item.affordability.toUpperCase()}
                </Text>
                <Text style={styles.descTextStyle}>
                  COMPLEXITY: {itemData.item.complexity.toUpperCase()}
                </Text>
                <Text style={styles.descTextStyle}>
                  DURATION: {itemData.item.duration} mins
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#222831",
  },
  container: {
    flex: 1,
    margin: 8,
    borderColor: "#eeeeee",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#eeeeee",
    textAlign: "center",
  },
  descContainer: {
    marginHorizontal: 16,
    padding: 8,
  },
  descTextStyle: {
    fontSize: 14,
    color: "#eeeeee",
  },
});

export default CategoryDetailsScreen;
