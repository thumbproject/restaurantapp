import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name, size, color, label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Icon;
