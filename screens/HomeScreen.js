import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component{
  render() {
    return(
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => this.props.navigation.navigate("JokeScreen")}>
          <Text>Read a Joke</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => this.props.navigation.navigate("HoroScope")}>
          <Text>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button3}
          onPress={() => this.props.navigation.navigate("WeatherScreen")}>
          <Text>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button4}
          onPress={() => this.props.navigation.navigate("NewsScreen")}>
          <Text>Top News</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button1:{
    width: 120,
    height: 50,
    marginTop: 40,
    marginLeft: 110,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button2:{
    width: 120,
    height: 50,
    marginTop: 20,
    marginLeft: 110,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button3:{
    width: 120,
    height: 50,
    marginTop: 20,
    marginLeft: 110,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button4:{
    width: 120,
    height: 50,
    marginTop: 20,
    marginLeft: 110,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;