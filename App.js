import * as React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AppHeader from "./components/AppHeader";
import Rating from "./components/Rating";
import { createAppContainer, createSwitchNavigator} from "react-navigation";

import HoroScope from "./screens/HoroScope";
import JokeScreen from "./screens/JokeScreen";
import NewsScreen from "./screens/NewsScreen";
import WeatherScreen from "./screens/WeatherScreen";

class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <AppContainer/>
        <Rating/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroScope: HoroScope,
  WeatherScreen: WeatherScreen,
  NewsScreen: NewsScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default App;