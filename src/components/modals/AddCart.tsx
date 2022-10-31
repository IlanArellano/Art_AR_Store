import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import {Button} from '@app/components/ButtonComponent';
import ImageButton from '../ImageButton';
import type {RootStack} from '@app/types/navigation';
import ModalBase from './base';

interface BaseProps extends ModalManagerProps, RootStack<'Home'> {}

const MAX_NUMBER_ARTICLES = 10;

export function AddCartModal(props: BaseProps) {
  const viewRef = useRef(new Animated.Value(200)).current;
  const [articles, setArticles] = useState<number>(0);
  const handleClose = () => {
    props.onClose(articles);
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
        <View style={modalStyles.countContainer}>
          <ImageButton
            imageStyle={modalStyles.icons}
            image="minus"
            disabled={articles <= 0}
            onPress={() => setArticles(prev => prev - 1)}
          />
          <Text style={modalStyles.count}>{articles}</Text>
          <ImageButton
            imageStyle={modalStyles.icons}
            image="plus"
            disabled={articles >= MAX_NUMBER_ARTICLES}
            onPress={() => setArticles(prev => prev + 1)}
          />
        </View>
        <Button
          style={styles.modalButton}
          buttonType="primary"
          onPress={() => handleClose()}
          title="Continuar"
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
