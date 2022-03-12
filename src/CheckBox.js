
import React, { Component } from "react";
import {
    View, TouchableWithoutFeedback,

} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
        this.state = {
            size: this.props.size ? this.props.size : 25,
            color: this.props.color ? this.props.color : 'rgb(50, 168, 111)'
        }
    }

    onChecked() {
        this.props.onChecked(!this.props.checked)
    }

    render() {
        return (
            <View >
                <TouchableWithoutFeedback onPress={this.onChecked}>
                    <View>
                        <Icons name="checkbox-blank-outline" color={"grey"} size={this.state.size} style={{ padding: 5 }} />
                        {this.props.checked ?
                            <Icons name="check-bold"
                                color={this.state.color}
                                size={this.state.size - 15}
                                style={{ position: "absolute", padding: 12 }} /> :
                            null}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
