import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import {Button} from '@app/components/ButtonComponent';
import ModalBase from './base';

interface BaseProps extends ModalManagerProps {}

export function ConfirmDeleteCartModal(props: BaseProps) {
  const handleClose = (res: boolean) => {
    props.onClose(res);
  };

  return (
    <ModalBase>
      <View style={styles.modalView}>
        <Text style={styles.title}>
          Deseas eliminar este articulo de tu carrito?
        </Text>
        <View style={modalStyles.buttonsContainer}>
          <Button
            style={[modalStyles.buttons, modalStyles.addButton]}
            textStyles={modalStyles.textButton}
            buttonType="primary"
            onPress={() => handleClose(false)}
            title="Cancelar"
          />
          <Button
            style={[modalStyles.buttons, modalStyles.cancelButton]}
            textStyles={modalStyles.textButton}
            buttonType="primary"
            onPress={() => handleClose(true)}
            title="Eliminar"
          />
        </View>
      </View>
    </ModalBase>
  );
}

const modalStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  buttons: {
    width: '40%',
    marginHorizontal: 10,
  },
  textButton: {
    color: '#ffffff',
  },
  cancelButton: {
    backgroundColor: '#FC5454',
  },
  addButton: {
    backgroundColor: '#3E3D3D',
  },
});
