import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CanvasImages} from '@app/components/ImageComponent';

export type Screens = {
  Login: undefined;
  Home: undefined;
  Test: undefined;
  Previsualize: CanvasParams;
  CanvaDetails: CanvasParams;
  Purchase: undefined;
  NotFound: undefined;
};

export type HomeScreens = {
  HomeTab: undefined;
  ProfileTab: undefined;
  CartTab: undefined;
};

export type RootStack<Key extends keyof Screens> = NativeStackScreenProps<
  Screens,
  Key
>;

export interface CanvasDimensions {
  id: number;
  width: number;
  height: number;
}

export interface Canvas {
  id: number;
  name: string;
  dimensions: CanvasDimensions[];
  dimension_index: number;
  price: number;
  material: 'Canvas' | 'Acrilico' | 'MDF' | 'Enmarcado';
  coleccion: 'Abstracto' | 'Minimalista' | 'Arquitectura' | 'Clasico';
  img: CanvasImages;
}

export interface CanvasParams extends Canvas {
  select_dimension?: number;
}

export interface CanvasDirectionSelected extends Canvas {
  dimension_selected: CanvasDimensions;
}
