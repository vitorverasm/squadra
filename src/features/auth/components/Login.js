import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as routes from '../../../navigation/routes';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    const { navigation } = this.props;
    navigation.navigate(routes.HOME);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Login screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
