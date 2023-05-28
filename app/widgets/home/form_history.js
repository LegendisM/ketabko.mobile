import React, { Component, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BookManager from '../../config/books';
import SectionPage from '../books/section_page';
import Styles from '../../constants/themes/home/style';

class FormHistory extends Component {

    constructor() {
        super();
        this.FormHistoryData = DataControllerCore.Get("FormHistory") || [];
        this.FormHistoryRowsUI = [];
        this.formCollector = {};
        this.formCount = 0;

        if (this.FormHistoryData.length > 0) {
            for (let index = this.FormHistoryData.length - 1; index >= 0; index--) {
                const element = this.FormHistoryData[index];
                if (element != null) {
                    const UniqKey = element.formName + element.bookName + element.sectionName;
                    if (this.formCollector.hasOwnProperty(UniqKey) == false) {
                        this.FormHistoryRowsUI.push(<FormHistoryRow key={index} formName={element.formName} bookName={element.bookName} sectionName={element.sectionName} formID={element.formID} ></FormHistoryRow>);
                        this.formCollector[UniqKey] = true;
                        this.formCount++;
                    }
                    if (Object.keys(this.formCollector).length > 10) {
                        return;
                    }
                }
            }
        }
    }

    render() {
        return (
            <View style={Styles.forms}>
                <View style={Styles.forms_main}>
                    <Animatable.Text animation={"slideInLeft"} style={Styles.form_row_title, { fontFamily: "Black" }}>اخرین فرم های تغییر یافته {this.formCount == 0 ? " (یافت نشد) " : ""}</Animatable.Text>
                    <ScrollView>
                        {this.FormHistoryRowsUI}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

class FormHistoryRow extends Component {

    constructor(props) {
        super(props);
        this.formName = props.formName;
        this.bookName = props.bookName;
        this.sectionName = props.sectionName;
        this.formID = props.formID;
        this.title = this.bookName + " - " + this.sectionName + " - " + this.formName;

        if (this.title.length > 48) {
            this.title = (this.bookName + " - " + this.sectionName + " - " + this.formName).substring(0, 48) + "...";
        }
        else {
            this.title = (this.bookName + " - " + this.sectionName + " - " + this.formName);
        }
    }

    gotoTargetSection() {
        let BookKey = "";
        for (let i = 0; i < Object.keys(BookManager).length; i++) {
            let Key = Object.keys(BookManager)[i];
            let Element = BookManager[Key];
            if (Element.title == this.bookName) {
                BookKey = Key;
            }
        }
        let Sections = BookManager[BookKey]["Sections"];
        let FindedKey = "";
        for (let i = 0; i < Object.keys(Sections).length; i++) {
            let Key = Object.keys(Sections)[i];
            let Element = Sections[Key];
            if (Element["Name"] == this.sectionName) {
                FindedKey = Key;
                let Page = <SectionPage BookName={this.bookName} SectionKey={Key} SectionName={Element["Name"]} defaultLoadTargetForm={true} defaultTargetFormID={this.formID} InputCategories={Element["InputCategories"]} Inputs={Element["Inputs"]}></SectionPage>
                RouteManagerCore.RegisterRouteByName(this.bookName + Key, Page)
            }
        }
        RouteManagerCore.SetCurrentRouteByName(this.bookName + FindedKey)
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.gotoTargetSection() }}>
                <Animatable.View animation={"flipInX"} duration={1500} style={Styles.form_row}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={[Styles.form_row_title, { fontSize: 14 }]}>{this.title}</Text>
                        <Image source={require("../../../assets/icons/pin.png")} style={{ width: 25, height: 25 }} resizeMode="contain"></Image>
                    </View>
                </Animatable.View>
            </TouchableOpacity>
        )
    }
}

export default FormHistory;