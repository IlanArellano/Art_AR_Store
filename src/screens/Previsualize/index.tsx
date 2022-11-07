import React, {useState, useRef, useContext, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARPlane,
  ViroImage,
  ViroNode,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import type {
  CanvasDimensions,
  CanvasDirectionSelected,
  RootStack,
} from '@app/types/navigation';
import {ImageDictionary} from '@app/components/ImageComponent';
import CustomButton from '@app/components/CustomButton';
import {UserContext} from '@app/context';

interface State {
  foundPlane: boolean;
  planePosition: [number, number, number];
  planeRotation: [number, number, number];
}

const ImageSceneAR = (props: ViroVRSceneNavigator) => {
  const itemProps = props.sceneNavigator
    .viroAppProps as CanvasDirectionSelected;

  const image = useMemo(
    () => ImageDictionary[itemProps.img]?.(),
    [itemProps.img],
  );

  return (
    <ViroARScene anchorDetectionTypes={['PlanesVertical']}>
      <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => {}}>
        <ViroImage
          height={(itemProps.dimension_selected.height ?? 100) / 100}
          width={(itemProps.dimension_selected.width ?? 100) / 100}
          source={image}
          placeholderSource={image}
          dragType="FixedDistance"
          onDrag={() => {}}
        />
      </ViroNode>
    </ViroARScene>
  );
};

export default function PrevisualizeScreen({
  route,
  navigation,
}: RootStack<'Previsualize'>) {
  const props = route.params || {};
  const {cart} = useContext(UserContext);
  const [select, setSelect] = useState<CanvasDimensions>(() =>
    props.select_dimension
      ? props.dimensions.find(x => x.id === props.select_dimension) ??
        props.dimensions[0]
      : props.dimensions[0],
  );

  const onSelect = (item: CanvasDimensions) => {
    setSelect(item);
  };

  const isItemExist = () => cart.some(x => x.item.id == props.id);
  return (
    <View style={styles.main}>
      <View style={styles.f1}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            /* @ts-ignore: Unreachable code error*/
            scene: ImageSceneAR,
          }}
          viroAppProps={{...props, dimension_selected: select}}
          style={styles.main}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {props.dimensions.map(x => {
          const isSelect = select.id === x.id;

          return (
            <CustomButton
              onPress={() => onSelect(x)}
              disabled={isSelect || isItemExist()}
              style={{
                backgroundColor: isSelect
                  ? 'rgba(0,0,0,0.5)'
                  : 'rgba(0,0,0,0.1)',
              }}
              key={x.id}
              title={`${x.width}cm x ${x.height}cm`}
            />
          );
        })}
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
