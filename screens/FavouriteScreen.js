import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Overview from "../components/Overview";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourite-context";

const FavouriteScreen = () => {
  const favouriteState = useContext(FavouriteContext);

  const items = MEALS.filter((item) => favouriteState.ids.includes(item.id));

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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FavouriteScreen;
