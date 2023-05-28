import React, { Component } from "react";
import { View, Text, Alert, SafeAreaView, BackHandler } from "react-native";
import RouteingService from "./app/services/routeing_service";
import StorageService from "./app/services/storage_service";
import Books from "./app/config/books";
import SplashScreen from "./app/screens/splash";
import Intro from './app/screens/intro';
import Home from "./app/screens/home";

class App extends Component {
  constructor() {
    super();
    global.AppCore = this;
    global.RouteManagerCore = new RouteingService(this);
    global.DataControllerCore = new StorageService(this);
    global.BookManagerCore = Books;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAction);
  }

  render() {
    RouteManagerCore.RegisterRouteByName(
      "SplashScreen",
      <SplashScreen></SplashScreen>
    );

    RouteManagerCore.RegisterRouteByName(
      "Intro",
      <Intro></Intro>
    );

    RouteManagerCore.RegisterRouteByName(
      "Home",
      <Home></Home>
    );

    return (
      <View style={{ flex: 1, margin: 0, backfaceVisibility: "hidden" }}>
        {RouteManagerCore.GetCurrentRoute()}
      </View>
    )
  }

  onBackAction() {
    let currentPageName = RouteManagerCore.GetCurrentRouteName();
    if (currentPageName != "Home") {
      RouteManagerCore.GotoPreviousRoute();
    } else {
      Alert.alert("صبر کن!", "آیا مطمئن هستید که می خواهید از برنامه خارج شوید؟", [
        { text: "خیر", onPress: () => null, style: "cancel" }, { text: "بله", onPress: () => BackHandler.exitApp() }
      ]);
    }
    return true;
  }
}

export default App;
