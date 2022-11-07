import React, {useState, useRef, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  ViroARPlane,
  ViroBox,
  ViroImage,
  ViroNode,
  ViroARPlaneSelector,
  ViroFlexView,
  type ViroTrackingState,
  type ViroTrackingReason,
  ViroClickStateEvent,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import type {
  CanvasDimensions,
  CanvasDirectionSelected,
  RootStack,
} from '@app/types/navigation';
import type {CanvasParams} from '@app/types/navigation';
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
  console.log({itemProps});
  const ARSceneRef = useRef<ViroARPlane>(null);
  const [state, setState] = useState<State>({
    foundPlane: true,
    planePosition: [0, 0, 0],
    planeRotation: [0, 0, 0],
  });

  const onChange = (change: Partial<State>) =>
    setState(prev => ({
      ...prev,
      ...change,
    }));

  const onAnchorFound = (anchorMap: any) => {
    console.log({anchorMap});
    var worldCenterPosition: [number, number, number] = [
      anchorMap.position[0] + anchorMap.center[0],
      anchorMap.position[1] + anchorMap.center[1],
      anchorMap.position[2] + anchorMap.center[2],
    ];
    ARSceneRef.current?.setNativeProps({pauseUpdates: true});
    onChange({
      foundPlane: true,
      planePosition: worldCenterPosition,
      planeRotation: anchorMap.rotation,
    });
  };

  const onClickState = (stateValue: any, position: any, source: any) => {
    console.log('ClickState', stateValue, position, source);
  };

  return (
    <ViroARScene>
      <ViroARPlane minHeight={0.5} minWidth={0.5} alignment={'Horizontal'}>
        <ViroNode onClickState={onClickState}>
          <ViroImage
            height={(itemProps.dimension_selected.height ?? 100) / 100}
            width={(itemProps.dimension_selected.width ?? 100) / 100}
            source={ImageDictionary[itemProps.img]?.()}
          />
        </ViroNode>
      </ViroARPlane>
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
