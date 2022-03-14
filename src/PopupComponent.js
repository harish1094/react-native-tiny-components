import React, { Component } from "react";
import {
    StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback,
    Dimensions, Animated
} from "react-native";

export default class PopupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: new Animated.Value(200),
            showPopUp: false,
        }
        Animated.spring(
            this.state.popup,
            {
                toValue: 100,
                useNativeDriver: true
            }
        ).start();
        this.openDialog = this.openDialog.bind(this);
    }

    openDialog() {
        console.log("ssssss")
        this.setState({ showPopUp: !this.state.showPopUp });
    }

    render() {
        var portrait = Dimensions.get("window").height > Dimensions.get("window").width ? true : false;
        var headerStyle = this.props.headerStyle ? this.props.headerStyle : [styles.headerStyle, { backgroundColor: "#203546" }];
        var headerTextStyle = this.props.headerTextStyle ? this.props.headerTextStyle : [styles.headerText, { color: "white" }];
        return (
            this.state.showPopUp ? <View style={[styles.container, { height: "100%", width: "100%", }]}>
                <TouchableWithoutFeedback onPress={this.openDialog}>
                    <View style={{ height: "100%", width: "100%" }}></View>
                </TouchableWithoutFeedback>
                <Animated.View style={[styles.popupContainer, {
                    transform: [{ translateY: this.state.popup }],
                    height: Dimensions.get("window").height * (portrait ? 0.40 : 0.60)
                }]}>
                    {this.props.headerText ? <View style={headerStyle}>
                        <Text style={headerTextStyle}>{this.props.headerText}</Text>
                    </View> : null}
                    <View>
                        <ScrollView
                            style={{ marginBottom: 3 }}>
                            {this.props.components ? this.props.components : <View></View>}
                        </ScrollView></View>
                </Animated.View>
            </View> : null
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
    },
    popupContainer: {
        position: "absolute",
        width: 300,
        backgroundColor: "white",
        borderRadius: 4,
        alignSelf: "center",
    },
    headerStyle: {
        alignSelf: "flex-start",
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center"
    }
});