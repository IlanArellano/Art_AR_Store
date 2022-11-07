import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UserContext} from '@app/context';
import {useNavigation} from '@react-navigation/native';
import ImageButton from '@app/components/ImageButton';
import useModalResource from '@app/hooks/useModalResource';
import {ConfigurationModal} from '@app/components/modals/Configuration';
import styles from './styles';
import {Sum} from '@app/common';

export default function CartInformation() {
  const {cart} = useContext(UserContext);
  const {showModal} = useModalResource();
  const navigation = useNavigation();
  const total = Sum(cart.map(x => x.count));

  const onConfiguration = async () => {
    /* @ts-ignore: Unreachable code error*/
    await showModal(ConfigurationModal, {navigate: navigation.navigate});
  };

  return (
    <View>
      <View style={styles.cardInformationSeparator}>
        <Text style={styles.cartTitle}>
          Actualmente tienes: {total} articulos al carrito
        </Text>
        <ImageButton
          onPress={onConfiguration}
          imageStyle={styles.homeIconButton}
          image="configuration"
          text="Configuracion"
        />
      </View>
    </View>
  );
}
