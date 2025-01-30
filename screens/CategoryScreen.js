import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();

  const navigateOverview = (items) => {
    navigation.navigate("Overview", {
      categoryId: items.item.id,
      title: items.item.title,
    });
  };

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
            <Pressable
              android_ripple={{ color: "#ccc" }}
              style={{ flex: 1 }}
              onPress={() => navigateOverview(itemData)}
            >
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
    backgroundColor: "#222831",
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
    color: "#222831",
  },
});

export default CategoryScreen;
