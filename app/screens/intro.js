import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Notification from '../services/notification_service';
import Styles from "../constants/themes/intro/style";

class Intro extends Component {
    constructor() {
        super();
        this.currentStep = 0;
        this.Steps = {
            [0]: {
                ["title"]: "امکانات",
                ["description"]: 'اپلیکیشن کتابکو با هدف فراهم سازی فرایند ها و سیستم های کتاب های موضوع توسعه فردی، روانشناسی، برنامه ریزی و مدیریت زمان تولید شده و در دسترس شما قرار گرفته.',
                ["logo"]: require("../../assets/logo/logo2.png"),
                ["button"]: "ادامه",
            },
            [1]: {
                ["title"]: "راحتی",
                ["description"]: 'در این اپلیکیشن راحتی کار و همیشه در دسترس بودن سیستم ها و محتوا و مهم تر از همه قابلیت ویرایش و استفاده نامحدود از بخش ها و سیستم هاست',
                ["logo"]: require("../../assets/logo/logo2.png"),
                ["button"]: "ادامه",
            },
            [2]: {
                ["title"]: "تاثیرگذاری",
                ["description"]: 'در این اپلیکیشن سعی شده محبوب ترین و کاربردی ترین کتاب ها مورد بررسی قرار داده شود و خروجی تاثیر گزار و کاربردی ای آن ها در اپلیکیشن قرار داده شود',
                ["logo"]: require("../../assets/logo/logo2.png"),
                ["button"]: "شروع",
            }
        }

    }

    componentDidMount() {
        this.start();
    }

    async start() {
        Notification.DisplayNotification('<p style="color: #4caf50;"><b>به اپلیکیشن کتاب کو خوش آمدید.</span></p></b></p>', 'می تونی با کتاب برنامه ریزی هفتگی شروع کنی ! &#127881;');
    }

    onReady() {
        if (Object.keys(this.Steps).length - 1 == this.currentStep) {
            DataControllerCore.Set("Intro", true);
            RouteManagerCore.SetCurrentRouteByName("Home");
        } else {
            this.currentStep++;
            this.setState({});
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" style={Styles.itemLogo} source={this.Steps[this.currentStep]["logo"]} resizeMode="contain" />
                <Animatable.Text animation="zoomInUp" easing="ease-out" style={Styles.itemTitle}>{this.Steps[this.currentStep]["title"]}</Animatable.Text>
                <Animatable.Text animation="slideInDown" easing="ease-out" style={Styles.itemDescription}>{this.Steps[this.currentStep]["description"]}</Animatable.Text>
                <TouchableOpacity style={Styles.itemButton} onPress={() => this.onReady()}>
                    <Text style={Styles.itemButtonText}>
                        {this.Steps[this.currentStep]["button"]} ({this.currentStep + 1}/{Object.keys(this.Steps).length})
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Intro;