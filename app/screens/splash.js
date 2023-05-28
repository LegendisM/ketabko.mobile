import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import * as Progress from "react-native-progress";
import Styles from "../constants/themes/splash/style";

class SplashScreen extends Component {
    constructor() {
        super();
        setTimeout(() => {
            let IntroState = DataControllerCore.Get("Intro");
            if (IntroState) {
                RouteManagerCore.SetCurrentRouteByName("Home");
            } else {
                RouteManagerCore.SetCurrentRouteByName("Intro");
            }
        }, 2800);
    }
    render() {
        return (
            <View style={Styles.container}>
                <ImageBackground style={Styles.main} source={require("../../assets/background/SplashScreen/1.png")} >
                    <Progress.Bar style={Styles.loading} progress={0.5} indeterminate={true} indeterminateAnimationDuration={2500} color={'#b3994e8c'} borderColor={'#b3994ec4'} />
                </ImageBackground>
            </View>
        )
    }
}

export default SplashScreen;