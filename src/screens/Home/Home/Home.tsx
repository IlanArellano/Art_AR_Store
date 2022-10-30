import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SearchComponent from './Search';
import ListComponent from './List';
import type {Canvas} from '@app/types/navigation';
/* @ts-ignore: Unreachable code error*/
import CanvasList from '@app/canvas.json';

export interface BaseProps {
  canvas: Canvas[];
}

export default function HomeTab() {
  const [canvas, setCanvas] = useState<Canvas[]>(() => CanvasList.canvas);
  return (
    <View>
      <SearchComponent />
      <ListComponent canvas={canvas} />
    </View>
  );
}
