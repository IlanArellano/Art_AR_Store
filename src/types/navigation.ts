import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CanvasImages} from '@app/components/ImageComponent';

export type Screens = {
  Login: undefined;
  Home: undefined;
  Test: undefined;
  NotFound: undefined;
};

export type HomeScreens = {
  HomeTab: undefined;
  ProfileTab: undefined;
  CartTab: undefined;
};

export type RootStack = NativeStackScreenProps<Screens, keyof Screens>;

export interface Canvas {
  id: number;
  name: string;
  width: number;
  height: number;
  price: number;
  material: 'Canvas' | 'Acrilico' | 'MDF' | 'Enmarcado';
  coleccion: 'Abstracto' | 'Minimalista' | 'Arquitectura' | 'Clasico';
  img: CanvasImages;
}
