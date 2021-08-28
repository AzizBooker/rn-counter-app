import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screen/home.screen";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
