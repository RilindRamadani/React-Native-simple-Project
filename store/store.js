import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { price: 0, meals: [] };

const priceSlice = createSlice({
  name: "priceSlice",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      console.log("Inside incrementSlice");
      state.price++;
    },
    decrement(state) {
      state.price--;
    },
    increaseBy(state, action) {
      state.price = state.price + action.amount;
    },
    decreaseBy(state, action) {
      state.price = state.price - action.amount;
    },

    addMeal(state, action) {
      state.meals.push(action.payload);
      console.log("Added inside addMeal");
      console.log(state.meals);
    },
    removeMeal(state, action) {
      const mealToRemove = action.payload;
      state.meals = state.meals.filter((meal) => meal !== mealToRemove);
      console.log("Removed inside removeMeal");
      console.log(state.meals);
    },
  },
});
const storeToolKit = configureStore({
  reducer: {
    priceReducer: priceSlice.reducer,
  },
});

export default storeToolKit;
export const priceReducerActions = priceSlice.actions;
