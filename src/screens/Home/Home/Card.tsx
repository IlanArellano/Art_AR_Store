import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListRenderItemInfo,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {Canvas, Screens, RootStack} from '@app/types/navigation';

import ImageComponent from '@app/components/ImageComponent';

export default function CardComponent({
  index,
  item,
  separators,
}: ListRenderItemInfo<Canvas>) {
  const navigation = useNavigation();

  const handleDetails = () => {
    /* @ts-ignore: Unreachable code error*/
    navigation.navigate<keyof Screens>('CanvaDetails', item);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleDetails}>
      <View style={styles.container}>
        <ImageComponent image={item.img} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {},
  container: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    width: width / 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3D3D',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
