import Category from "../models/category";
import Meal from "../models/meal";

async function fetchMealsFromDb() {
  const response = await fetch(
    "https://react-native-105fe-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
  );
  const data = await response.json();

  const categoryList = await CATEGORIES;

  const categories = Object.keys(categoryList).map((key) => {
    const categoryData = categoryList[key];
    return new Category(key, categoryData.category, categoryData.color);
  });

  const meals = Object.keys(data).map((key) => {
    const mealData = data[key];

    const mealCategories = mealData.categories.map((categoryId) =>
      categories.find((category) => category.id == categoryId)
    );

    return new Meal(
      key,
      mealCategories,
      mealData.title,
      mealData.complexity,
      mealData.imageUrl,
      mealData.ingredients,
      mealData.steps,
      mealData.Time,
      mealData.price
    );
  });

  return meals;
}

async function fetchCategoriesFromDb() {
  const response = await fetch(
    "https://react-native-105fe-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  );
  const data = await response.json();
  const data_1 = data;
  const categories = Object.entries(data_1).map(([key, value_1]) => {
    return new Category(key, value_1.category, value_1.color);
  });

  const categories2 = Object.keys(categories).map((key) => {
    const categoryData = categories[key];
    return new Category(key, categoryData.category, categoryData.color);
  });

  return categories2;
}

export const CATEGORIES = fetchCategoriesFromDb();

export const MEALS = fetchMealsFromDb();
