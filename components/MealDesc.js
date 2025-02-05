import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDesc = ({ affordability, complexity, duration }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descTextStyle}>
        AFFORDABILITY: {affordability.toUpperCase()}
      </Text>
      <Text style={styles.descTextStyle}>
        COMPLEXITY: {complexity.toUpperCase()}
      </Text>
      <Text style={styles.descTextStyle}>DURATION: {duration} mins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    padding: 8,
  },
  descTextStyle: {
    fontSize: 14,
    color: "#eeeeee",
  },
});

export default MealDesc;
