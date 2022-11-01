import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UserContext} from '@app/context';
import {Sum} from '@app/common';

export default function CartInformation() {
  const {cart} = useContext(UserContext);

  return (
    <View>
      <Text>
        Actualmente tienes: {Sum(cart.map(x => x.count))} articulos al carrito
      </Text>
    </View>
  );
}
