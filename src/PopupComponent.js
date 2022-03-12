import React, { Component } from "react";
import {
    StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback,
    Dimensions, Animated
} from "react-native";

export default class PopupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: new Animated.Value(100),
            showPopUp: false,
        }
        Animated.spring(
            this.state.popup,
            {
                toValue: 1,
                useNativeDriver: true
            }
        ).start();
        this.openDialog = this.openDialog.bind(this);
    }

    openDialog() {
        this.setState({ showPopUp: !this.state.showPopUp });
    }

    /* render  */
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
                    height: portrait ? "40%" : "60%", bottom: portrait ? '30%' : "20%"
                }]}>
                    <View style={headerStyle}>
                        <Text style={headerTextStyle}>Select Device</Text>
                    </View>
                    <ScrollView
                        style={{ marginTop: 3, marginBottom: 3, width: '100%' }}>
                        <Text style={{}}>{"nvr.dvr_name"}</Text>
                    </ScrollView>
                </Animated.View>
            </View> : null
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        alignItems: "center",
    },
    popupContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: 300,
        backgroundColor: "white",
        borderRadius: 4,
        alignSelf: "center",
    },
    headerStyle: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center"
    },
    popupText: {
        color: "green",
        fontSize: 16,
        textAlign: "center",
        backgroundColor: "white",
        padding: 5
    }
});