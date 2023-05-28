import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../../constants/themes/books/style';

class Section extends Component {
    constructor(Arguments) {
        super();
        this.title = Arguments.title;
        this.page = Arguments.page;
    }
    render() {
        return (
            <TouchableOpacity style={Styles.Section} onPress={() => RouteManagerCore.SetCurrentRouteByName(this.page)}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" duration={1000} style={Styles.Section_hashtag} source={require("../../../assets/icons/writers.png")} />
                <Text style={Styles.Section_title}>
                    {this.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Section;
