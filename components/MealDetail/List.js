import { View, Text, StyleSheet } from "react-native";
import images from "../../assets/images.json";
function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: images.colors.red.mediumRed,
  },
  itemText: {
    color: images.colors.black.solidBlack,
    textAlign: "center",
  },
});
