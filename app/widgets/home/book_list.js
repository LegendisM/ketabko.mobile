import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../../constants/themes/home/style';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.Books = props.Books;
    }

    render() {
        return (
            <Animatable.View style={Styles.main} animation="flipInY" duration={2000} easing="ease-out" >
                <ScrollView style={Styles.ScrollBar}>
                    {this.Books}
                </ScrollView>
            </Animatable.View>
        )
    }
}

export default BookList;