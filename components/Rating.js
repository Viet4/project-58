import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import db from "../config";

class Rating extends React.Component{
  likePressed(likeButton){
    var like = db.ref("Rating/");
    like.update({
      "likePressed": 1
    });
  }

  dislikePressed(dislikeButton){
    var dislike = db.ref("Rating/");
    dislike.update({
      "dislikePressed": 1
    });
  }

  render(){
    return(
      <View>
        <Text style={styles.text}>Rate Us</Text>
        <TouchableOpacity
          onPress={ this.likePressed }>
          <Image 
            style={styles.imageIcon1} 
            source={ require("../assets/like.png") }>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ this.dislikePressed }>
          <Image 
            style={styles.imageIcon2} 
            source={ require("../assets/dislike.png") }>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    marginLeft: 146,
    marginTop: 20
  },
  imageIcon1:{
    width: 60,
    height: 60,
    marginLeft: 80,
    marginTop: 0
  },
  imageIcon2:{
    width: 60,
    height: 60,
    marginLeft: 200,
    marginTop: -50
  }
});

export default Rating;