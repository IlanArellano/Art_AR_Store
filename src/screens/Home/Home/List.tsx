import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import SearchComponent from './Search';
import CardComponent from './Card';
import type {BaseProps} from './Home';

interface Props extends BaseProps {}

export default function ListComponent(props: Props) {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.containerList}
        data={props.canvas}
        numColumns={2}
        renderItem={props => <CardComponent {...props} />}
        keyExtractor={item => String(item.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width,
    backgroundColor: '#000000',
    marginBottom: 200,
  },
  containerList: {},
});
