import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "../../constants/themes/books/style";
import Header from "./header";
import Sections from './sections';

class BookTemplate extends Component {
    constructor(Arguments) {
        super();
        this.title = Arguments.title;
        this.about = Arguments.about;
        this.flat_logo = Arguments.flat_logo;
        this.logo = Arguments.logo;
        this.cover = Arguments.cover;
        this.audio = Arguments.audio;
        this.Sections = Arguments.Sections;
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.main}>
                    {/* Back Button */}

                    {/* Header */}
                    <Header title={this.title} about={this.about} cover={this.cover} flat_logo={this.flat_logo} audio={this.audio}></Header>
                    {/* Sections */}
                    <Sections BookName={this.title} Sections={this.Sections}></Sections>
                </View>
            </View>
        )
    }
}

export default BookTemplate;
