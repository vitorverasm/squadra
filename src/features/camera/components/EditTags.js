import React, { Component } from 'react';
import {
  FlatList, StyleSheet, TextInput, Text, View, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { human, sanFranciscoWeights } from 'react-native-typography';
import { colors } from '../../../utils/styles';

class EditTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTagName: ''
    };
  }

  add = () => {
    const { addTag } = this.props;
    const { newTagName } = this.state;
    this.setState({ newTagName: '' });
    addTag(newTagName);
  };

  delete = (id) => {
    const { deleteTag } = this.props;
    deleteTag(id);
  };

  render() {
    const { tags } = this.props;
    const { newTagName } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <TextInput
            style={[styles.tagLabel, { color: colors.primary }]}
            onChangeText={text => this.setState({ newTagName: text })}
            value={newTagName}
            underlineColorAndroid={colors.primary}
            numberOfLines={1}
            onSubmitEditing={this.add}
          />
          <TouchableOpacity
            onPress={this.add}
            style={{
              flex: 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: 20,
              height: 20
            }}
          >
            <Icon
              name="plus-square"
              size={17}
              color={colors.primary}
              style={{ backgroundColor: 'transparent' }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ flex: 1, backgroundColor: 'transparent' }}
          contentContainerStyle={{ flexGrow: 0 }}
          data={tags}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 0,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10
              }}
            >
              <Text style={styles.tagLabel} numberOfLines={1}>
                {item.tagName}
              </Text>
              <TouchableOpacity
                onPress={() => this.delete(item.id)}
                style={{
                  flex: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 20,
                  height: 20
                }}
              >
                <Icon
                  name="trash-2"
                  size={17}
                  color={colors.primary}
                  style={{ backgroundColor: 'transparent' }}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10
  },
  tagLabel: {
    ...human.body,
    ...sanFranciscoWeights.bold,
    flex: 1,
    marginRight: 10
  }
});

export default EditTags;
