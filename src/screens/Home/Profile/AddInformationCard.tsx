import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import CustomButton from '@app/components/CustomButton';
import {CheckEmptyValues} from '@app/common';
import {UserContext} from '@app/context';
import ImageButton from '@app/components/ImageButton';

interface Information {
  fullName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const initial: Information = {
  fullName: '',
  cardNumber: '',
  expDate: '',
  cvv: '',
};

const fields = Object.keys(initial) as (keyof Information)[];

export default function AddInformationCard() {
  const [info, setInfo] = useState<Information>(() => initial);
  const [open, setOpen] = useState<boolean>(false);
  const {setData} = useContext(UserContext);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onChange = (key: keyof Information) => (value: string) => {
    setInfo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    setData(prev => ({
      ...prev,
      card_information: {
        fullName: info.fullName,
        card_number: info.cardNumber,
        exp_date: info.expDate,
        cvv: info.cvv,
      },
    }));
    setOpen(false);
  };

  if (!open)
    return (
      <View style={styles.main}>
        <Text style={styles.cardInformation}>Informacion de la Tarjeta</Text>
        <Text style={styles.noCard}>No tienes ninguna tarjeta agregada!</Text>
        <ImageButton
          onPress={handleAdd}
          imageStyle={styles.iconButton}
          image="card"
          text="Agregar Trajeta"
        />
      </View>
    );
  return (
    <View style={styles.main}>
      <Text style={styles.cardInformation}>
        Añadir Tarjeta de Credito/Debito
      </Text>
      <Text>Nombre del titular</Text>
      <TextInput
        value={info.fullName}
        onChangeText={onChange('fullName')}
        style={styles.input}
      />
      <Text>Numero de la tarjeta</Text>
      <TextInput
        value={info.cardNumber}
        onChangeText={onChange('cardNumber')}
        keyboardType="number-pad"
        style={styles.input}
        maxLength={16}
      />
      <View style={styles.cardInformationSeparator}>
        <View style={styles.cardExp}>
          <Text>Fecha de expiracion</Text>
          <TextInput
            value={info.expDate}
            onChangeText={onChange('expDate')}
            keyboardType="number-pad"
            style={styles.input}
            maxLength={5}
          />
        </View>
        <View style={styles.cardCVV}>
          <Text>CVV</Text>
          <TextInput
            value={info.cvv}
            onChangeText={onChange('cvv')}
            keyboardType="number-pad"
            style={styles.input}
            maxLength={3}
          />
        </View>
      </View>
      <CustomButton
        style={styles.cardAddButton}
        disabled={CheckEmptyValues(info, fields)}
        onPress={handleSubmit}
        title="Agregar tarjeta"
      />
      <CustomButton
        style={styles.cardCancelButton}
        onPress={handleCancel}
        title="Cancelar"
      />
    </View>
  );
}
