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
import {UserContext} from '@app/context';
import ImageButton from '@app/components/ImageButton';

export default function AddInformationCard() {
  const [open, setOpen] = useState<boolean>(false);
  const {setData} = useContext(UserContext);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleCancel = () => {
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
      <TextInput style={styles.input} />
      <Text>Numero de la tarjeta</Text>
      <TextInput keyboardType="number-pad" style={styles.input} />
      <View style={styles.cardInformationSeparator}>
        <View style={styles.cardExp}>
          <Text>Fecha de expiracion</Text>
          <TextInput keyboardType="number-pad" style={styles.input} />
        </View>
        <View style={styles.cardCVV}>
          <Text>CVV</Text>
          <TextInput keyboardType="number-pad" style={styles.input} />
        </View>
      </View>
      <CustomButton style={styles.cardAddButton} title="Agregar tarjeta" />
      <CustomButton
        style={styles.cardCancelButton}
        onPress={handleCancel}
        title="Cancelar"
      />
    </View>
  );
}
