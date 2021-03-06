
import React, { Component } from "react";
import {
    View, TouchableWithoutFeedback, Text

} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
        this.state = {
            size: this.props.size ? this.props.size : 25,
            color: this.props.color ? this.props.color : '#203546'
        }
    }

    onChecked() {
        this.props.onChecked(!this.props.active)
    }

    render() {
        return (
            <View >
                <TouchableWithoutFeedback onPress={this.onChecked}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icons name={!this.props.active ? "radiobox-marked" : "radiobox-blank"}
                            color={this.props.active ? "grey" : this.state.color}
                            size={this.state.size} style={{ padding: 5 }} />
                        <Text
                            style={this.props.textStyle ? this.props.textStyle : { fontSize: this.state.size - 5, color: "black" }}>
                            {this.props.name ? this.props.name : ""}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
