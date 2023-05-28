import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import BookTemplate from "../widgets/books/main";
import BookList from '../widgets/home/book_list';
import Book from "../widgets/home/book";
import Header from '../widgets/home/header';
import FormHistory from "../widgets/home/form_history";
import Writers from '../widgets/home/writers';
import About from "../widgets/home/about";
import Styles from "../constants/themes/home/style";

class Home extends Component {
    constructor() {
        super();
        this.Books = [];
        this.activeHeader = false;
        this.menus = {
            ["home"]: 'flex',
            ["formhistory"]: 'none',
            ["writers"]: 'none',
            ["about"]: 'none',
        }

        for (let i = 0; i < Object.keys(BookManagerCore).length; i++) {
            let Key = Object.keys(BookManagerCore)[i];
            let Element = BookManagerCore[Key];
            RouteManagerCore.RegisterRouteByName(Key, <BookTemplate key={Key} title={Element.title} about={Element.about} Sections={Element.Sections} background={Element.background} flat_logo={Element.flat_logo} logo={Element.logo} cover={Element.cover} audio={Element.audio}></BookTemplate>);
            this.Books.push(<Book key={Key} active={Element.active} title={Element.title} about={Element.about} page={Key} background={Element.background} logo={Element.logo} cover={Element.cover}></Book>);
        }
    }
    onMenuChange(page) {
        for (key in this.menus) {
            this.menus[key] = 'none';
        }
        this.menus[page] = 'flex';
        if (this.menus["home"] == "none") {
            this.activeHeader = true;
        }
        else {
            this.activeHeader = false;
        }
        this.setState({});
    }
    render() {
        return (
            <View style={Styles.container}>
                {/* Header */}
                {this.activeHeader == true ? <Header></Header> : null}
                {/* Body */}
                {this.menus["home"] == "flex" ? <BookList Books={this.Books}></BookList> : null}
                {/* Form History */}
                {this.menus["formhistory"] == 'flex' ? <FormHistory></FormHistory> : null}
                {/* Writers */}
                {this.menus["writers"] == 'flex' ? <Writers></Writers> : null}
                {/* About */}
                {this.menus["about"] == 'flex' ? <About></About> : null}
                {/* Bottom Menu */}
                <Animatable.View style={Styles.main} animation="slideInUp" duration={2500} style={Styles.menu}>
                    {/* Option 1 */}
                    <TouchableOpacity style={Styles.menu_item} underlayColor="white" onPress={() => { this.onMenuChange("about") }}>
                        <Image style={Styles.menu_item_image} source={require("../../assets/icons/about.png")} resizeMode="cover"></Image>
                    </TouchableOpacity>
                    {/* Option 2 */}
                    <TouchableOpacity style={Styles.menu_item} underlayColor="white" onPress={() => { this.onMenuChange("writers") }}>
                        <Image style={Styles.menu_item_image} source={require("../../assets/icons/writepen.png")} resizeMode="cover"></Image>
                    </TouchableOpacity>
                    {/* Option 3 */}
                    <TouchableOpacity style={Styles.menu_item} underlayColor="white" onPress={() => { this.onMenuChange("formhistory") }}>
                        <Image style={Styles.menu_item_image} source={require("../../assets/icons/writers.png")} resizeMode="cover"></Image>
                    </TouchableOpacity>
                    {/* Option 4 */}
                    <TouchableOpacity style={Styles.menu_item} underlayColor="white" onPress={() => { this.onMenuChange("home") }}>
                        <Image style={Styles.menu_item_image} source={require("../../assets/icons/home.png")} resizeMode="cover"></Image>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
}

export default Home;