import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { priceReducerActions } from "../store/store";

import styles from "./Css/HomeScreenStyle";
function CheckoutScreen() {
  const counter = useSelector((state) => state.priceReducer.price);
  const reduxMeals = useSelector((state) => state.priceReducer.meals);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(priceReducerActions.increment());
    console.log("Incrementing....");
    console.log(reduxMeals);
  };

  const decrementHandler = () => {
    dispatch(priceReducerActions.decrement());
    console.log(counter);
    console.log("Decrementing....");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>The favorite items are</Text>

      <Text style={styles.text}>meals:</Text>

      {reduxMeals.map((meal) => (
        <Text style={styles.text} key={meal}>
          {meal}
        </Text>
      ))}

      <Pressable
        onPress={incrementHandler}
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable>
      <Pressable
        onPress={decrementHandler}
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Decrement</Text>
      </Pressable>

      <Text style={styles.text}>{counter}</Text>
    </ScrollView>
  );
}

export default CheckoutScreen;
