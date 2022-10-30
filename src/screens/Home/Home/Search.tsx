import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {IconsComponent} from '@app/icons/icons';
import ImageComponent from '@app/components/ImageComponent';

export default function SearchComponent() {
  return (
    <View style={styles.main}>
      <ImageComponent image="search_icon" style={styles.icon} />
      <TextInput
        placeholderTextColor="#000000"
        placeholder="Buscar"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  icon: {
    flex: 1,
    width: 20,
    height: '90%',
  },
  input: {
    flex: 7,
    color: '#000000',
  },
});
