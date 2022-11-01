import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserContext} from '@app/context';
import ImageComponent from '@app/components/ImageComponent';
import type {RootStack} from '@app/types/navigation';

import CardInformation from './CardInformation';
import CartInformation from './CartInformation';

export default function ProfileTab() {
  const {data} = useContext(UserContext);

  return (
    <View style={styles.main}>
      <View style={styles.userContainer}>
        <Text style={styles.userText}>
          Hola, <Text style={styles.userDisplay}>{data.user}</Text>
        </Text>
        <ImageComponent image="user_profile_icon" style={styles.userIcon} />
      </View>
      <CardInformation />
      <CartInformation />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardContainer: {},
  userContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  userText: {
    fontSize: 20,
  },
  userDisplay: {
    fontWeight: 'bold',
  },
  userIcon: {
    width: 30,
    height: 30,
  },
});
