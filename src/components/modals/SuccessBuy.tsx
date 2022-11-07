import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import {Button} from '@app/components/ButtonComponent';
import ModalBase from './base';

interface BaseProps extends ModalManagerProps {
  email: string;
}

export function SuccessBuyModal(props: BaseProps) {
  return (
    <ModalBase>
      <View style={styles.modalView}>
        <Text style={styles.title}>
          Tu compra ha sido finalizada con éxito, te enviaremos un correo a la
          direccion <Text style={modalStyles.emailText}>{props.email}</Text> con
          el estatus de tu compra
        </Text>
        <View style={modalStyles.buttonsContainer}>
          <Button
            style={[modalStyles.buttons, modalStyles.acceptButton]}
            textStyles={modalStyles.textButton}
            buttonType="primary"
            onPress={() => props.onClose()}
            title="Seguir comprando"
          />
        </View>
      </View>
    </ModalBase>
  );
}

const modalStyles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  buttons: {
    width: '100%',
    marginHorizontal: 10,
  },
  textButton: {
    color: '#ffffff',
  },
  acceptButton: {
    backgroundColor: '#14BBA9',
  },
  emailText: {
    fontWeight: 'bold',
  },
});
