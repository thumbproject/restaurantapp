import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View
            style={[
              styles.outerContainer,
              { backgroundColor: itemData.item.color },
            ]}
          >
            <Pressable android_ripple={{ color: "#ccc" }} style={{ flex: 1 }}>
              <View style={styles.innterContainer}>
                <Text style={styles.title}>{itemData.item.title}</Text>
              </View>
            </Pressable>
          </View>
        )}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    backgroundColor: "#000",
  },
  outerContainer: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },
  innterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryScreen;
