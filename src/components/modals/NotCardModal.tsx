import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import {Button} from '@app/components/ButtonComponent';
import ModalBase from './base';

interface BaseProps extends ModalManagerProps {}

export function NotCardModal(props: BaseProps) {
  return (
    <ModalBase>
      <View style={styles.modalView}>
        <Text style={styles.title}>
          Aun no has añadido un metodo de pago a tu compra
        </Text>
        <View style={modalStyles.buttonsContainer}>
          <Button
            style={[modalStyles.buttons, modalStyles.acceptButton]}
            textStyles={modalStyles.textButton}
            buttonType="primary"
            onPress={() => props.onClose()}
            title="Aceptar"
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
    backgroundColor: '#3E3D3D',
  },
});
