import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import Overview from "../components/Overview";

const CategoryDetailsScreen = ({ route }) => {
  const { categoryId, title } = route.params;

  const items = MEALS.filter(
    (item) => item.categoryIds.findIndex((id) => id === categoryId) >= 0
  );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={styles.screen}>
      <Overview items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 60,
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
});

export default CategoryDetailsScreen;
