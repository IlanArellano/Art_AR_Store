import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {UserContext} from '@app/context';
import CardInformation from '../Home/Profile/CardInformation';
import PurchaseItem from './item';
import CustomButton from '@app/components/CustomButton';
import {Sum, moneyFormat} from '@app/common';
import useModalResource from '@app/hooks/useModalResource';
import {NotCardModal} from '@app/components/modals/NotCardModal';
import {SuccessBuyModal} from '@app/components/modals/SuccessBuy';
import type {RootStack} from '@app/types/navigation';

export default function PurchaseScreen({navigation}: RootStack<'Login'>) {
  const {cart, data, setCart} = useContext(UserContext);
  const {showModal} = useModalResource();

  const onPayment = async () => {
    if (!data.card_information.card_number) {
      await showModal(NotCardModal);
      return;
    }
    /* @ts-ignore: Unreachable code error*/
    await showModal(SuccessBuyModal, {email: data.email});
    setCart([]);
    navigation.navigate('Home');
  };
  return (
    <FlatList
      contentContainerStyle={styles.main}
      data={cart}
      renderItem={props => <PurchaseItem {...props} />}
      ListHeaderComponent={() => <Text style={styles.title}>Pago</Text>}
      ListFooterComponent={() => (
        <>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total:{' '}
              <Text>
                {moneyFormat(Sum(cart.map(x => x.count * x.item.price)))}
              </Text>
            </Text>
          </View>
          <CardInformation />
          <CustomButton
            onPress={onPayment}
            style={styles.paymentButton}
            title="Pagar artículos"
          />
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 10,
    position: 'relative',
    paddingVertical: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    width: '100%',
    backgroundColor: '#14BBA9',
    marginVertical: 20,
  },
});
