
import React, { Component } from "react";
import {
    StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback,
    Dimensions, Animated, TouchableOpacity
} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
    }

    onChecked() {
        this.props.onChecked(!his.props.checked)
    }

    render() {
        return (
            <View >
                <TouchableWithoutFeedback onPress={this.onChecked}>
                    <Icons name="video" style={{ marginLeft: 10 }} color="white" size={50} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        alignItems: "center",
    }
});