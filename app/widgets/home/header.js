import React, { Component } from "react";
import { Image, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import Styles from "../../constants/themes/home/style";

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Animatable.View style={Styles.main} animation="flipInY" duration={1500} style={Styles.header}>
                <Image style={{ width: 40, marginTop: -24 }} source={require("../../../assets/logo/logo.png")} resizeMode="contain"></Image>
                <Image style={{ width: 93, marginLeft: 10, marginTop: -3 }} source={require("../../../assets/logo/logo2.png")} resizeMode="contain"></Image>
            </Animatable.View>
        )
    }
}

export default Header;