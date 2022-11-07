import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageComponent from '@app/components/ImageComponent';
import ImageButton from '@app/components/ImageButton';
import useModalResource from '@app/hooks/useModalResource';
import {AddCartModal} from '@app/components/modals/AddCart';
import {ConfirmAddCartModal} from '@app/components/modals/ConfirmAddCard';
import {UserContext} from '@app/context';
import type {Canvas, RootStack} from '@app/types/navigation';
import {moneyFormat} from '@app/common';
import CustomButton from '@app/components/CustomButton';

export default function CanvasDetailsScreen({
  route,
  navigation,
}: RootStack<'CanvaDetails'>) {
  const props = route.params || {};
  const [select, setSelect] = useState(props.select_dimension ?? 1);
  const {showModal} = useModalResource();
  const {cart} = useContext(UserContext);

  const handleReturn = () => {
    navigation.navigate('Home');
  };

  const onSelect = (id: number) => {
    setSelect(id);
  };

  const isItemExist = () => cart.some(x => x.item.id == props.id);

  const onAddCart = async () => {
    (await showModal(AddCartModal, {...props, select})) as number;
    navigation.navigate('Home');
  };

  const onPrevisualize = async () => {
    const addCardConfirm = (await showModal(ConfirmAddCartModal)) as boolean;
    if (addCardConfirm) await onAddCart();
    navigation.navigate('Previsualize', props);
  };

  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <ImageComponent image={props.img} style={styles.image} />
      </View>
      <View style={styles.imageContainer}>
        <Text style={[styles.fontTitle, styles.name]}>{props.name}</Text>
        <Text style={[styles.fontTitle, styles.price]}>
          {moneyFormat(props.price)}
        </Text>

        <View style={styles.informationBody}>
          <Text style={styles.moreInformation}>Mas información</Text>

          <View>
            <Text style={styles.informationDetails}>
              Material:{' '}
              <Text style={styles.informationDetailsProps}>
                {props.material}
              </Text>
            </Text>
            <Text style={styles.informationDetails}>
              Coleccion:{' '}
              <Text style={styles.informationDetailsProps}>
                {props.coleccion}
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.informationDetails}>Dimensiones:</Text>
            <View style={styles.dimensionButtons}>
              {props.dimensions &&
                props.dimensions.map(dimension => {
                  const isSelect = select === dimension.id;
                  return (
                    <CustomButton
                      onPress={() => onSelect(dimension.id)}
                      disabled={isSelect || isItemExist()}
                      style={{
                        backgroundColor: isSelect
                          ? 'rgba(0,0,0,0.5)'
                          : 'rgba(0,0,0,0.1)',
                      }}
                      key={dimension.id}
                      title={`${dimension.width}cm x ${dimension.height}cm`}
                    />
                  );
                })}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsMain}>
        <ImageButton
          style={styles.buttonContainerMain}
          onPress={handleReturn}
          image="arrow_back_icon"
          text="Atras"
          imageStyle={styles.iconButton}
        />
        {!isItemExist() && (
          <ImageButton
            onPress={onAddCart}
            style={styles.buttonContainerMain}
            image="cart_icon"
            text="Añadir al carrito"
            imageStyle={styles.iconButton}
          />
        )}
        <ImageButton
          onPress={onPrevisualize}
          style={styles.buttonContainerMain}
          image="camera_icon"
          text="Previsualizar"
          imageStyle={styles.iconButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fontTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
  },
  informationDetails: {
    fontSize: 18,
  },
  informationDetailsProps: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
  },
  informationBody: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  moreInformation: {
    fontSize: 20,
  },
  imageContainer: {
    flex: 5,
  },
  informationContainer: {
    flex: 1,
  },
  buttonsMain: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  buttonContainerMain: {
    flex: 1,
  },
  dimensionButtons: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  iconButton: {
    width: 25,
    height: 25,
  },
});
