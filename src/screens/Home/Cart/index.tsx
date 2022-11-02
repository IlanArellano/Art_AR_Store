import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import ImageComponent from '@app/components/ImageComponent';
import CartItem from './CartItem';
import {UserContext} from '@app/context';
import {Sum} from '@app/common';
import CustomButton from '@app/components/CustomButton';

export default function CartTab() {
  const {cart, setCart} = useContext(UserContext);
  return (
    <View style={styles.main}>
      {cart.length === 0 ? (
        <View style={styles.emptyCardContainer}>
          <ImageComponent style={styles.cartIcon} image="cart_icon" />
          <View style={styles.emptyCardTextContainer}>
            <Text>Tu carrito se encuentra vacio</Text>
            <Text>
              Retoma tu compra de pinturas seleccionando los que mas te gustan
            </Text>
          </View>
        </View>
      ) : (
        <>
          <FlatList
            style={styles.list}
            data={cart}
            keyExtractor={item => String(item.item.id)}
            renderItem={props => <CartItem {...props} />}
          />
          <View style={styles.paymentContainer}>
            <CustomButton
              style={styles.paymentButton}
              title={`Proceder al pago (${Sum(cart.map(x => x.count))})`}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  list: {
    marginBottom: 75,
  },
  cartIcon: {
    width: 57,
    height: 50,
  },
  paymentContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
    top: Dimensions.get('window').height / 1.2,
  },
  paymentButton: {
    width: '100%',
  },
  emptyCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emptyCardTextContainer: {
    marginLeft: 10,
    width: Dimensions.get('window').width / 2,
  },
});
