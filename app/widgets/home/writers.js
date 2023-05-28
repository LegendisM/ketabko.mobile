import React, { Component } from "react";
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from "../../constants/themes/home/style";

class Writers extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={Styles.writers}>
                <ScrollView>
                    <Writer animation={"fadeInLeftBig"} name={"(DarrenHardy) دارن هاردی"} cover={require("../../../assets/writers/DarrenHardy.png")} about={"دارن هاردی نویسنده آمریکایی ، نویسنده پرفروش نیویورک تایمز است که ترن هوایی کارآفرین، بهترین سال زندگی خود و اثر مرکب را نوشته است."}></Writer>
                    <Writer animation={"fadeInRightBig"} name={"(Gary John) گری جان بیشاپ"} cover={require("../../../assets/writers/GaryJohn.png")} about={"«گری جان بیشاپ» متولد ۱۷ آوریل ۱۹۴۸ در گلاسکو به دنیا آمد ، او یکی از بزرگترین کارشناسان حوزه توسعه شخصی با شهرتی جهانی است."}></Writer>
                    <Writer animation={"fadeInLeftBig"} name={"(Rhonda Byrne) راندا برن"} cover={require("../../../assets/writers/RhondaByrne.png")} about={"راندا برن ، در 12 مارس 1945 در استرالیا متولد شد. وی نویسنده و تهیه کننده استرالیایی بوده و او را بیشتر به خاطر مستند راز و کتابی که با همین نام چندی بعد به چاپ رسید می‌شناسند."}></Writer>
                    <Writer animation={"fadeInRightBig"} last={true} name={"(Brian Tracy) برایان تریسی"} cover={require("../../../assets/writers/BrianTracy.png")} about={"در زمستان سرد سال 1944، در شهر ونکوور کانادا و در خانواده‌ای فقیر به دنیا آمد.برایان تریسی در آثار خود، قوانین موفقیت را فرمول‌بندی کرده است."}></Writer>
                </ScrollView>
            </View>
        )
    }
}

class Writer extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.about = props.about;
        this.cover = props.cover;
        this.last = props.last;
        this.animation = props.animation;
    }

    render() {
        return (
            <Animatable.View style={Styles.main} animation={this.animation} duration={1350} easing="ease-in-out" >
                <ImageBackground source={this.cover} resizeMode={"cover"} style={[Styles.writers_row, (this.last == true ? { marginBottom: 42.5 } : {})]}>
                    <View>
                        <Text style={{ fontFamily: 'Medium', fontSize: 17, color: 'white', textAlign: 'right' }}>{this.name}</Text>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={{ fontFamily: 'Medium', color: '#ffffffd9', textAlign: 'right' }}>{this.about}</Text>
                    </View>
                </ImageBackground>
            </Animatable.View>
        )
    }
}

export default Writers;