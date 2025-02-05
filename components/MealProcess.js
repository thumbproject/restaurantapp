import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealProcess = ({ title, keypoints }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}> {title} </Text>
      {keypoints.map((keypoint) => (
        <Text key={keypoint} style={styles.keyPoint}>
          {keypoint}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#eeeeee",
    textAlign: "center",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#eeeeee",
    padding: 8,
    marginHorizontal: 16,
  },
  keyPoint: {
    fontSize: 16,
    color: "#eeeeee",
    textAlign: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#eeeeee",
    padding: 6,
    backgroundColor: "#393e46",
    marginVertical: 2,
    marginHorizontal: 36,
  },
});

export default MealProcess;
