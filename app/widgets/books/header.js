import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from "../../constants/themes/books/style";

class Header extends Component {
    constructor(Arguments) {
        super();
        this.title = Arguments.title;
        this.about = Arguments.about;
        this.audio = Arguments.audio;
        this.cover = Arguments.cover;
        this.flat_logo = Arguments.flat_logo;
        this.audioIsPlaying = false;
    }

    async onTrackEvent() {
        if (this.audioIsPlaying) {
            this.audioIsPlaying = false;
        } else {
            this.audioIsPlaying = true;
        }
        this.setState({});
    }

    render() {
        return (
            <ImageBackground style={Styles.header} source={this.cover} resizeMode="stretch" imageStyle={{ height: 232.5 }}>
                <TouchableOpacity style={Styles.back} onPress={() => RouteManagerCore.SetCurrentRouteByName("Home")}>
                    <Animatable.Image animation="rubberBand" duration={2500} style={{ width: 40, height: 40 }} source={require("../../../assets/icons/back.png")}></Animatable.Image>
                </TouchableOpacity>

                <View style={Styles.header_detial_1}>
                    <Image style={Styles.header_book_logo} source={this.flat_logo} resizeMode="contain"></Image>
                    <TouchableOpacity onPress={() => { this.onTrackEvent() }}>
                        <Image style={Styles.header_play} source={this.audioIsPlaying == true ? require("../../../assets/icons/pause.png") : require("../../../assets/icons/play.png")} resizeMode="contain"></Image>
                    </TouchableOpacity>
                </View>

                <Animatable.View animation="slideInRight" duration={2500} style={Styles.header_detial_2}>
                    <Text style={Styles.header_title}>{this.title}</Text>
                    <Text style={Styles.header_about}>{this.about.replace(/\n/g, ' | ')}</Text>
                </Animatable.View>
            </ImageBackground>
        )
    }
}

export default Header;
