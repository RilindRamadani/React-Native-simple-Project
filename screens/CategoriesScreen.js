import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { useEffect, useState } from "react";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesData = await CATEGORIES;
        setCategories(categoriesData);
        console.log(categoriesData);
      } catch (error) {
        // Handle error
      }
    }

    fetchCategories();
  }, []);

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <>
        <CategoryGridTile
          title={itemData.item.category}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </>
    );
  }

  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
