import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../../constants/themes/home/style';

class About extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={Styles.about}>
                <Animatable.View animation={"fadeInLeft"} duration={1250} style={Styles.about_detial}>
                    <Text style={Styles.about_detial_text}>
                        این اپلیکیشن با تمرکز بر دسته ای از کتاب ها که در بهره وری و موفقیت فردی نقش بسزایی دارد و جدا از کتاب های داستانی و خیالی (که آنها هم برای ایجاد تفکر و پند آموزی ارزشمند هستند)، باعث شده کاربر بدون اینکه چیزی را از دست بدهد بتواند در زمان کم تر و بدون نیاز به خواندن کل کتاب چاپی و فیزیکی به خروجی های کتاب و مطالب مفید اصلی آن دست یابد.
                        در بیانی دیگر، این اپلیکیشن فضایی را برای کاربران آماده می کند که در هر زمان و مکانی برای برنامه ریزی و پیاده سازی الگو های کتاب های توسعه فردی، روانشناسی و موفقیت فردی در کمترین زمان و در دسترس ترین حالت ممکن بتوانند با آن کار کنند و به آن دسترسی داشته باشند.
                        هدف اصلی این ایده آسان سازی و در دسترس بودن ارتباط و کار با جدول ها و الگو های کتاب هایی است که توانایی بهره وری و موفقیت را در کاربر ایجاد می کند.
                    </Text>
                </Animatable.View>
                <View style={Styles.about_builders}>
                    <Animatable.View animation={"fadeInRightBig"} duration={2950} style={Styles.about_builders_section_left}>
                        <Image source={require("../../../assets/character/hamidreza.png")} resizeMode={"contain"}></Image>
                        <Text style={Styles.about_builders_section_title}>حمیدرضا محمدی</Text>
                        <Text style={Styles.about_builders_section_detial}>توسعه و برنامه نویسی</Text>
                    </Animatable.View>
                </View>
            </View>
        )
    }
}

export default About;