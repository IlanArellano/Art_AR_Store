import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UserContext} from '@app/context';
import ImageButton from '@app/components/ImageButton';
import styles from './styles';
import {Sum} from '@app/common';

export default function CartInformation() {
  const {cart} = useContext(UserContext);
  const total = Sum(cart.map(x => x.count));

  const goToHome = () => {};

  const goToCart = () => {};

  return (
    <View>
      <View style={styles.cardInformationSeparator}>
        <Text style={styles.cartTitle}>
          Actualmente tienes: {total} articulos al carrito
        </Text>
        {total > 0 ? (
          <ImageButton
            onPress={goToCart}
            imageStyle={styles.homeIconButton}
            image="cart_icon"
            text="Ir al carrito"
          />
        ) : (
          <ImageButton
            onPress={goToHome}
            imageStyle={styles.homeIconButton}
            image="home_icon"
            text="Ir a la tienda"
          />
        )}
      </View>
    </View>
  );
}
