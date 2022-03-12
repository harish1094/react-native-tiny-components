# react-native-tiny-components

## Getting started

`$ npm install react-native-tiny-components`


## Note : This repo is still under construction


## Usage

```javascript
import {
  CheckBox, RadioButton
} from "react-native-tiny-components";


import React, { Component } from 'react';
import { View } from 'react-native';


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
      <View style={[styles.container]} onLayout={this._onLayout}>
        <CheckBox
          onChecked={(value) => this.setState({ active: value })}
          active={this.state.active}
          color={"#203546"}
          size={30} />
        <CheckBox
          onChecked={(value) => this.setState({ active: value })}
          checked={this.state.checked}
          color={"rgb(50, 168, 111)"}
          size={30} />
      </View>
    )
  }
}


```