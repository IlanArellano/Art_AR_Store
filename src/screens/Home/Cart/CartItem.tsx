import React, {useContext} from 'react';
import {View, Text, type ListRenderItemInfo, StyleSheet} from 'react-native';
import useModalResource from '@app/hooks/useModalResource';
import {useNavigation} from '@react-navigation/native';
import ImageComponent from '@app/components/ImageComponent';
import ImageButton from '@app/components/ImageButton';
import CustomButton from '@app/components/CustomButton';
import {ConfirmDeleteCartModal} from '@app/components/modals/ConfirmationDeleteItem';
import {Canvas, Screens} from '@app/types/navigation';
import {UserContext} from '@app/context';
import {CartItems} from '@app/context';
import {moneyFormat} from '@app/common';
import CanvasList from '@app/canvas.json';

export default function CartItem({
  index,
  item,
  separators,
}: ListRenderItemInfo<CartItems>) {
  console.log('ItemRender');
  const {setCart} = useContext(UserContext);
  const {showModal} = useModalResource();
  const navigation = useNavigation();

  const onDelete = async () => {
    const confirm = (await showModal(ConfirmDeleteCartModal)) as boolean;
    if (confirm) setCart(prev => prev.filter(x => x.item.id !== item.item.id));
  };

  const onAdd = () => {
    setCart(prev =>
      prev.map(x => {
        if (x.item.id === item.item.id)
          return {
            ...x,
            count: x.count + 1,
          };
        return x;
      }),
    );
  };

  const onRemove = async () => {
    if (item.count <= 1) {
      await onDelete();
      return;
    }
    setCart(prev =>
      prev.map(x => {
        if (x.item.id === item.item.id)
          return {
            ...x,
            count: x.count - 1,
          };
        return x;
      }),
    );
  };

  const onInfo = () => {
    const findItem =
      (CanvasList.canvas as Canvas[]).find(x => x.id === item.item.id) ||
      ({} as Canvas);
    /* @ts-ignore: Unreachable code error*/
    navigation.navigate<keyof Screens>('CanvaDetails', {
      ...findItem,
      select_dimension: item.item.select_dimension,
    });
  };

  const onPreview = () => {
    const findItem =
      (CanvasList.canvas as Canvas[]).find(x => x.id === item.item.id) ||
      ({} as Canvas);
    /* @ts-ignore: Unreachable code error*/
    navigation.navigate<keyof Screens>('Previsualize', {
      ...findItem,
      select_dimension: item.item.select_dimension,
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.informationContainer}>
        <ImageComponent style={styles.image} image={item.item.img} />
        <View style={styles.information}>
          <View style={styles.generalInformation}>
            <Text>{item.item.name}</Text>
            <Text>{moneyFormat(item.item.price)}</Text>
            <Text>
              {item.item.width}cm x {item.item.height}cm
            </Text>
          </View>
          <View style={styles.cartInformation}>
            <ImageButton
              imageStyle={styles.icon}
              disabled={item.count <= 0}
              onPress={onRemove}
              image="minus"
            />
            <Text>{item.count}</Text>
            <ImageButton
              imageStyle={styles.icon}
              disabled={item.count >= 10}
              onPress={onAdd}
              image="plus"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={onDelete}
          style={[styles.buttons, styles.deleteButton]}
          title="Eliminar"
          image="delete"
        />
        <CustomButton
          onPress={onInfo}
          style={[styles.buttons, styles.informationButton]}
          title="Mas Information"
          image="information"
        />
        <CustomButton
          onPress={onPreview}
          style={[styles.buttons, styles.previewButton]}
          title="Previsualizar"
          image="camera_icon"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 200,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  informationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  information: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  generalInformation: {
    width: 150,
  },
  cartInformation: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  buttons: {
    flex: 1,
    paddingVertical: 7,
    marginHorizontal: 2,
  },
  deleteButton: {
    backgroundColor: '#FC5454',
  },
  informationButton: {
    backgroundColor: '#00579E',
  },
  previewButton: {
    backgroundColor: '#D6DCFA',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
