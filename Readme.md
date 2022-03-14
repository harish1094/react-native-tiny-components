# react-native-tiny-components

## Getting started

`$ npm install react-native-tiny-components`


## Usage

```javascript
import { CheckBox, RadioButton, PopupComponent } from "react-native-tiny-components";


import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ExampleApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      active: false
    }
  }

  render() {
    return (
      <View style={{}} >
        <CheckBox
          name={"Select"}
          checked={this.state.checked}
          onChecked={(value) => {
            this.setState({ checked: value })
          }}
          textStyle={{ color: "black", fontSize: 16 }}
          color={"rgb(50, 168, 111)"}
          size={30} />

        <RadioButton
          textStyle={{ color: "black", fontSize: 16 }}
          name="Click Here"
          onChecked={(value) => {
            this.setState({ active: value })
          }}
          active={this.state.active}
          color={"#203546"}
          size={30} />

        <TouchableOpacity style={{
          padding: 5,
          backgroundColor: "#203546",
          margin: 10,
          height: 50,
          alignItems: "center",
          justifyContent: "center"
        }}
          onPress={() => {
            this.refs.popup.openDialog();
          }}>
          <Text style={{ color: "white", fontSize: 18 }}>{"Toggle Popup"}</Text>
        </TouchableOpacity>
        
        <PopupComponent ref="popup"
          components={
            <View style={{ backgroundColor: "white" }}>
              <Text>{"Message"}</Text>
            </View>
          }
          headerText="Click Here"
        />
      </View>
    )
  }
}


```

## CheckBox
### Props

| Prop          | Type     | Optional | Default | Description                                                                                                                         |
| ------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `name` | String | Yes      |         | Title of checkbox.                                                      |
| `checked`   | Boolean | No      |         | value for the checkbox is checked or not . |
| `onChecked`   | Function | No      |         | Is called when an the checkbox is clicked . |
| `color`   | String | Yes      |         | Color for the check mark . |
| `size`   | Integer | Yes      |         | Size for the checkbox . |
| `textStyle`   | Style | Yes      |         | Style for the name . |


## RadioButton
### Props

| Prop          | Type     | Optional | Default | Description                                                                                                                         |
| ------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `name` | String | Yes      |         | Title for the radio button.                                                      |
| `active`   | Boolean | No      |         | value for the radio button is checked or not . |
| `onChecked`   | Function | No      |         | Is called when an the radio button is clicked . |
| `color`   | String | Yes      |         | Color for the radio button  . |
| `size`   | Integer | Yes      |         | Size for the radio button . |
| `textStyle`   | Style | Yes      |         | Style for the name . |



## PopupComponent
### Props

| Prop          | Type     | Optional | Default | Description                                                                                                                         |
| ------------- | -------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `ref` | String | Yes      |         | Will be used to toggle popup window.                                                      |
| `components`   | JSX Components | No      |         | Whatever is passed in the components prop will be show in the popup body. |
| `headerText`   | String | No      |         | Title for the popup . |
| `headerStyle`   | String | Yes      |         | Style for the Title text . |
| `headerTextStyle`   | String | Yes      |         | Style for the Title text container . |



## Note : This repo is still under construction