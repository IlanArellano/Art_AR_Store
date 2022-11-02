import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {ModalManagerProps} from '@app/context';
import {baseStyles as styles} from './styles';
import {Button} from '@app/components/ButtonComponent';
import ImageButton from '../ImageButton';
import {Canvas} from '@app/types/navigation';
import {UserContext} from '@app/context';
import ModalBase from './base';

interface BaseProps extends Partial<ModalManagerProps>, Readonly<Canvas> {}

const MAX_NUMBER_ARTICLES = 10;

export function AddCartModal(props: BaseProps) {
  const {cart, setCart} = useContext(UserContext);

  const viewRef = useRef(new Animated.Value(200)).current;
  const [articles, setArticles] = useState<number>(0);

  const getItemFromContext = () =>
    cart.find(canvas => canvas.item.id === props.id);

  const getItem: () => Canvas = () => ({
    id: props.id,
    coleccion: props.coleccion,
    height: props.height,
    img: props.img,
    material: props.material,
    name: props.name,
    price: props.price,
    width: props.width,
  });

  const handleClose = () => {
    if (articles >= 0) {
      const itemContext = getItemFromContext();
      const item = getItem();
      if (itemContext !== undefined) {
        setCart(prev =>
          prev
            .filter(x => x.item.id !== item.id)
            .concat({item: item, count: articles}),
        );
      } else {
        setCart(prev => prev.concat({item: item, count: articles}));
      }
    }
    if (props.onClose) props.onClose();
  };

  useEffect(() => {
    Animated.timing(viewRef, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const findItem = getItemFromContext();
    if (findItem !== undefined) {
      setArticles(findItem.count);
    }
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
