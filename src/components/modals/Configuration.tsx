import React, {useEffect, useRef, useContext} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import CustomButton from '../CustomButton';
import {Canvas} from '@app/types/navigation';
import {UserContext, initial} from '@app/context';
import ModalBase from './base';

interface BaseProps extends ModalManagerProps, Readonly<Canvas> {
  navigate: any;
}

export function ConfigurationModal(props: BaseProps) {
  const {setCart, setData} = useContext(UserContext);

  const viewRef = useRef(new Animated.Value(200)).current;

  const onLogOut = () => {
    setData(() => initial.data);
    setCart([]);
    props.navigate('Login');
    props.onClose();
  };

  useEffect(() => {
    Animated.timing(viewRef, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ModalBase>
      <Animated.View
        style={[styles.modalViewThird, {transform: [{translateY: viewRef}]}]}>
        <Text style={styles.configurationTitle}>Opciones</Text>
        <CustomButton
          style={[styles.modalButton, styles.logoutButton]}
          image="logout"
          onPress={onLogOut}
          title="Cerrar Sesión"
        />
        <CustomButton
          style={[styles.modalButton, styles.backButton]}
          image="arrow_back_icon"
          onPress={() => props.onClose()}
          title="Atras"
        />
      </Animated.View>
    </ModalBase>
  );
}

const modalStyles = StyleSheet.create({
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  count: {
    fontSize: 30,
  },
  icons: {
    width: 30,
    height: 30,
  },
});
