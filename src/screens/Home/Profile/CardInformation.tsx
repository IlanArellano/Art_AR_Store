import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddInformationCard from './AddInformationCard';
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

export const styles = StyleSheet.create({
  main: {
    flex: 4,
  },
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 5,
  },
  cardInformation: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  cardValue: {
    fontWeight: 'bold',
  },
  noCard: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
  },
  iconButton: {
    width: 50,
    height: 35,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    color: '#000000',
  },
  cardInformationSeparator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardExp: {
    flex: 2,
    marginRight: 5,
  },
  cardCVV: {
    flex: 1,
  },
  cardAddButton: {
    marginVertical: 10,
  },
  cardCancelButton: {
    marginVertical: 10,
    backgroundColor: '#FC5454',
  },
});
