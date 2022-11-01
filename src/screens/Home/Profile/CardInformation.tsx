import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddInformationCard from './AddInformationCard';
import styles from './styles';
import {UserContext} from '@app/context';

export default function CardInformation() {
  const {data} = useContext(UserContext);

  if (!data.card_information.card_number) return <AddInformationCard />;
  return (
    <View style={styles.main}>
      <Text style={styles.cardInformation}>Informacion de la Tarjeta</Text>
      <View style={styles.container}>
        <Text style={styles.cardTitle}>
          Numero de tarjeta:{' '}
          <Text style={styles.cardValue}>
            {data.card_information.card_number}
          </Text>
        </Text>
        <Text style={styles.cardTitle}>
          Nombre del titular:{' '}
          <Text style={styles.cardValue}>{data.card_information.fullName}</Text>
        </Text>
        <Text style={styles.cardTitle}>
          Fecha de expiración:{' '}
          <Text style={styles.cardValue}>{data.card_information.exp_date}</Text>
        </Text>
        <Text style={styles.cardTitle}>
          CVV: <Text style={styles.cardValue}>{data.card_information.cvv}</Text>
        </Text>
      </View>
    </View>
  );
}
