import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const [displayedMeals, setDisplayedMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const meals = await MEALS;
        const displayedMeals = meals.filter((mealItem) => {
          return mealItem.categories.some((category) => {
            return category.id === catId;
          });
        });
        setDisplayedMeals(displayedMeals);
      } catch (error) {
        // Handle error
      }
    }
    fetchData();
  }, [catId]);

  // Usage:

  useLayoutEffect(() => {
    async function getCategoryTitle() {
      try {
        const categories = await CATEGORIES;
        const categoryTitle = categories.find((category) => {
          return category.id == catId;
        }).category;

        navigation.setOptions({
          title: categoryTitle,
        });
      } catch (error) {
        // Handle error
      }
    }

    getCategoryTitle();
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      complexity: item.complexity,
      duration: item.Time,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
