import React, {PropsWithChildren} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {baseStyles as styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ModalBase({children}: PropsWithChildren) {
  return (
    <Modal animationType="fade" transparent visible style={styles.main}>
      <View style={styles.canvas}>
        <SafeAreaView style={[StyleSheet.absoluteFill, styles.centeredView]}>
          {children}
        </SafeAreaView>
      </View>
    </Modal>
  );
}
