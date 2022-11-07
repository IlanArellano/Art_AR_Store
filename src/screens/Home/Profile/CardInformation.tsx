import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import AddInformationCard from './AddInformationCard';
import CustomButton from '@app/components/CustomButton';
import styles from './styles';
import {initial, UserContext} from '@app/context';

export default function CardInformation() {
  const {data, setData} = useContext(UserContext);

  const onDelete = () => {
    setData(() => initial.data);
  };

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
      <CustomButton
        onPress={onDelete}
        style={[styles.buttons, styles.deleteButton]}
        image="delete"
        title="Eliminar"
      />
    </View>
  );
}
