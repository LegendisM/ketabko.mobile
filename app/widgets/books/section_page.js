import React, { Component, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Keyboard, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Styles from "../../constants/themes/books/style_section_page";
import DateUtils from '../../utils/date';

class SectionPage extends Component {

    constructor(props) {
        super(props);

        this.bookName = props.BookName;
        this.sectionKey = props.SectionKey;
        this.sectionName = props.SectionName;
        this.bookSectionID = this.bookName + this.sectionKey;
        this.defaultLoadTargetForm = props.defaultLoadTargetForm;
        this.defaultTargetFormID = props.defaultTargetFormID;
        this.inputCategories = props.InputCategories;
        this.inputs = props.Inputs;
        this.controlDisplay = { ["date"]: 'flex', ["form"]: 'none' };
        this.dateContentUI = [];
        this.formContentUI = [];
        this.bookData = DataControllerCore.Get(this.bookSectionID);
        this.state = {
            newFormTitle: "",
            currentFormID: null,
            form: {}
        }
    }

    componentDidMount() {
        if (this.defaultLoadTargetForm == false) {
            this.start();
        } else {
            this.selectform(this.defaultTargetFormID);
        }
    }

    componentWillUnmount() {
        this.state = {
            newFormTitle: "",
            currentFormID: null,
            form: {}
        }
    }

    start() {
        this.dateContentUI = [];
        this.formContentUI = [];

        // Generate List Of Saved Form Data
        for (let Key in this.bookData) {
            let data = this.bookData[Key];
            this.dateContentUI.push(
                <TouchableOpacity key={data.name + data.date} style={Styles.date_row} onPress={() => this.selectform(data.id)}>
                    <Image style={Styles.date_row_hashtag} source={require("../../../assets/icons/writers.png")} />
                    <Text style={Styles.date_row_title}>
                        {data.name + " (" + DateUtils.ConvertDateToSimpleMode(data.date) + ")"}
                    </Text>
                </TouchableOpacity>
            );
        }

        // Generate algorithm fields
        if (this.state.currentFormID != null) {
            for (let keyCategory in this.inputCategories) {
                this.formContentUI.push(<Text key={keyCategory} style={Styles.form_title}>{this.inputCategories[keyCategory]}</Text>);
                for (let keyInput in this.inputs) {
                    let input = this.inputs[keyInput];
                    if (keyCategory == input.Category) {
                        this.formContentUI.push(
                            <TextInput key={keyCategory + "_" + input.Name} style={Styles[input.Style]} defaultValue={(this.state.form.form[input.Name] || "")} placeholder={input.PlaceHolder} multiline={input.MultiLine} onChangeText={(value) => { this.state.form.form[input.Name] = value }} />
                        );
                    }
                }
            }
        }

        this.setState({});
    }

    selectform(id) {
        this.state.currentFormID = id;
        this.state.form = this.bookData.find(form => form.id == id);
        this.controlDisplay.date = 'none';
        this.controlDisplay.form = 'flex';
        Keyboard.dismiss();
        this.start();
    }

    createNewForm() {
        if (this.bookData == undefined) {
            this.bookData = [];
        }

        let id = this.bookData.length + 1;
        let name = this.state.newFormTitle;
        let date = new Date();
        let form = {};

        if (name.length < 1) {
            return;
        }

        this.bookData.push({ id, name, date, form });
        DataControllerCore.Set(this.bookSectionID, this.bookData);
        this.start();
        this.selectform(id);
    }

    saveCurrentForm() {
        if (this.state.currentFormID != null) {
            for (let index = 0; index < this.bookData.length; index++) {
                if (this.bookData[index].id == this.state.currentFormID) {
                    this.bookData[index] = this.state.form;
                }
            }
            DataControllerCore.Set(this.bookSectionID, this.bookData);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'تبریک میگم',
                textBody: 'اطلاعات با موفقیت ذخیره شد.',
            });
            this.addFormToFormsHistory();
        }
    }

    addFormToFormsHistory() {
        let FormHistory = DataControllerCore.Get("FormHistory") || [];
        FormHistory.push({ formID: this.state.currentFormID, formName: this.state.form.name, bookName: this.bookName, sectionName: this.sectionName });
        DataControllerCore.Set("FormHistory", FormHistory)
    }

    render() {
        return (
            <Root theme="dark">
                <View style={Styles.container}>
                    <View style={Styles.main}>
                        <View style={[Styles.date, { display: this.controlDisplay.date }]}>
                            <Animatable.View style={Styles.date_create} animation="bounceIn" duration={2500}>
                                <TouchableOpacity style={Styles.date_button} onPress={() => { this.createNewForm() }}>
                                    <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" duration={800} source={require("../../../assets/icons/plus.png")} resizeMode={"contain"}></Animatable.Image>
                                </TouchableOpacity>
                                <TextInput style={Styles.date_input} placeholder={"نام فرم مورد نظر جهت ایجاد فرم جدید . . ."} placeholderTextColor={'#000000b5'} onChangeText={(value) => { this.state.newFormTitle = value; }}></TextInput>
                            </Animatable.View>

                            <Animatable.Text animation="slideInRight" duration={2500} style={[Styles.form_title, { marginTop: 15, marginBottom: 4, fontSize: 14.5, textAlign: 'right' }]}>فرم های ثبت شده  : </Animatable.Text>
                            <Animatable.View animation="zoomInUp" duration={1000} style={{ height: "80.8%" }}>
                                <ScrollView>
                                    {this.dateContentUI}
                                </ScrollView>
                            </Animatable.View>
                        </View>

                        <View style={[Styles.form, { display: this.controlDisplay.form }]}>
                            <View style={Styles.MainInputs}>
                                <KeyboardAwareScrollView>
                                    {this.formContentUI}
                                </KeyboardAwareScrollView>
                            </View>
                        </View>

                        <Animatable.View style={Styles.menu} animation="slideInUp" duration={2500}>
                            <TouchableOpacity style={[Styles.menu_item, { display: this.controlDisplay.form }]} onPress={() => { this.saveCurrentForm() }}>
                                <Text style={{ fontFamily: "Medium" }}>ذخیره</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.menu_item} onPress={() => { RouteManagerCore.GotoPreviousRoute() }}>
                                <Text style={{ fontFamily: "Medium" }}>بازگشت</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>
            </Root>
        )
    }
}

export default SectionPage;