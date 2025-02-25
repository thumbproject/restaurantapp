import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDesc from "../components/MealDesc";

const Overview = ({ items }) => {
  const navigation = useNavigation();

  const navigateToMealDetail = (mealId) => {
    navigation.navigate("MealDetail", { mealId });
  };

  return (
    <FlatList
      data={items}
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
            <MealDesc
              affordability={itemData.item.affordability}
              complexity={itemData.item.complexity}
              duration={itemData.item.duration}
            />
          </Pressable>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default Overview;
