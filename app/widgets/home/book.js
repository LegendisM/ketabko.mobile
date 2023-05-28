import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground, Alert } from "react-native";
import Styles from '../../constants/themes/home/style';

class Book extends Component {
  constructor(Arguments) {
    super();
    this.title = Arguments.title;
    this.about = Arguments.about;
    this.page = Arguments.page;
    this.logo = Arguments.logo;
    this.cover = Arguments.cover;
    this.background = Arguments.background;
    this.active = Arguments.active;
  }
  render() {
    return (
      <ImageBackground style={Styles.book} source={this.background}>
        <TouchableOpacity style={Styles.book_touchable} onPress={() => this.active == true ? RouteManagerCore.SetCurrentRouteByName(this.page) : Alert.alert("این بخش در حال اماده سازی می باشد.")} underlayColor="white">
          <Image style={Styles.book_logo} source={this.logo} resizeMode={'contain'}></Image>
          <View style={Styles.book_content}>
            <Text style={Styles.book_title}>
              {this.title}
            </Text>
            <Text style={Styles.book_about}>
              {this.about}
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

export default Book;