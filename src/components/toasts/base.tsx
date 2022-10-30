import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Sleep} from '@app/common';
import {CloseIcon} from '@app/icons';
import type {ToastManagerProps} from '@app/context';

export interface BaseProps extends ToastManagerProps {
  title: string;
  color: string;
}

const MAX_CLOSE_TIME = 5000;

export default function ToastBase(props: BaseProps) {
  const toastRef = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    let timeOut: number | undefined;
    Animated.timing(toastRef, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    timeOut = setTimeout(async () => await handleClose(), MAX_CLOSE_TIME);

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, []);

  const handleClose = async () => {
    Animated.timing(toastRef, {
      toValue: -100,
      duration: 400,
      useNativeDriver: true,
    }).start();
    await Sleep(0.4);
    props.onClose();
  };

  return (
    <Animated.View
      style={[
        styles.main,
        {backgroundColor: props.color},
        {transform: [{translateY: toastRef}]},
      ]}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
