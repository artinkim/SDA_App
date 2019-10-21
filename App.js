import React, { Component } from 'react';
import {Text, TextInput, View } from 'react-native';
import * as RNFS from 'react-native-fs';
export default class FileIOArtin extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',readText: ''};
  }
render() {
    var RNFS = require('react-native-fs');
    var path = RNFS.DocumentDirectoryPath + '/test.txt';
    RNFS.readFile(path, 'ascii').then(res => {
        this.state.readText = res;
        this.forceUpdate();
    })
    .catch(err => {
        console.log(err.mesfsage, err.code);
    });

return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
                style={{height: 40}}
                placeholder="Enter input"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={()=> {RNFS.writeFile(path, this.state.text, 'utf8')
                                         .then((success) => {
                                           console.log('FILE WRITTEN!');
                                         })
                                         .catch((err) => {
                                           console.log(err.message);
                                         });}}
              />
        <Text>{this.state.readText}</Text>
        <Text>{path}</Text>
      </View>
    );
}
}
