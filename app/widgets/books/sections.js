import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SectionPage from './section_page';
import Section from './section';
import Styles from '../../constants/themes/books/style';

class Sections extends Component {
    constructor(Arguments) {
        super();
        this.SectionsList = [];
        for (let i = 0; i < Object.keys(Arguments.Sections).length; i++) {
            let Key = Object.keys(Arguments.Sections)[i];
            let Element = Arguments.Sections[Key];
            let Page = <SectionPage BookName={Arguments.BookName} SectionKey={Key} SectionName={Element["Name"]} defaultLoadTargetForm={false} defaultTargetFormID={-1} InputCategories={Element["InputCategories"]} Inputs={Element["Inputs"]}></SectionPage>
            RouteManagerCore.RegisterRouteByName(Arguments.BookName + Key, Page)
            this.SectionsList.push(<Section key={i} title={Element["Name"]} page={Arguments.BookName + Key} />);
        }
    }

    render() {
        return (
            <Animatable.View animation="slideInLeft" duration={1500} style={Styles.Sections}>
                <ScrollView>
                    {this.SectionsList}
                </ScrollView>
            </Animatable.View>
        )
    }
}

export default Sections;
