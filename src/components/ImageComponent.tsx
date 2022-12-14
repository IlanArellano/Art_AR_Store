import React, {useCallback} from 'react';
import {Image, ImageProps} from 'react-native';

export type Images =
  | 'background1'
  | 'home_icon'
  | 'search_icon'
  | 'user_profile_icon'
  | 'cart_icon'
  | 'arrow_back_icon'
  | 'camera_icon'
  | 'loader'
  | 'plus'
  | 'minus'
  | 'card'
  | 'information'
  | 'delete'
  | 'check'
  | 'configuration'
  | 'logout';

export type CanvasImages =
  | 'canvas_1'
  | 'canvas_2'
  | 'canvas_3'
  | 'canvas_4'
  | 'canvas_5'
  | 'canvas_6'
  | 'canvas_7'
  | 'canvas_8'
  | 'canvas_9'
  | 'canvas_10';

type ImageRequire = () => number;
export type ImageCollection = Images | CanvasImages;

export const ImageDictionary: Record<ImageCollection, ImageRequire> = {
  background1: () => require('@app/assets/background1.png'),
  home_icon: () => require('@app/assets/home-icon.png'),
  search_icon: () => require('@app/assets/search-icon.png'),
  user_profile_icon: () => require('@app/assets/user-profile-icon.png'),
  arrow_back_icon: () => require('@app/assets/return_icon.png'),
  camera_icon: () => require('@app/assets/camera_icon.png'),
  cart_icon: () => require('@app/assets/cart_icon.png'),
  canvas_1: () => require('@app/assets/canvas/canvas_1.webp'),
  canvas_2: () => require('@app/assets/canvas/canvas_2.webp'),
  canvas_3: () => require('@app/assets/canvas/canvas_3.webp'),
  canvas_4: () => require('@app/assets/canvas/canvas_4.webp'),
  canvas_5: () => require('@app/assets/canvas/canvas_5.webp'),
  canvas_6: () => require('@app/assets/canvas/canvas_6.webp'),
  canvas_7: () => require('@app/assets/canvas/canvas_7.webp'),
  canvas_8: () => require('@app/assets/canvas/canvas_8.webp'),
  canvas_9: () => require('@app/assets/canvas/canvas_9.webp'),
  canvas_10: () => require('@app/assets/canvas/canvas_10.webp'),
  loader: () => require('@app/assets/loader.png'),
  plus: () => require('@app/assets/plus_icon.png'),
  minus: () => require('@app/assets/minus_icon.png'),
  card: () => require('@app/assets/card_icon.png'),
  information: () => require('@app/assets/information_icon.png'),
  delete: () => require('@app/assets/delete_icon.png'),
  check: () => require('@app/assets/check_icon.png'),
  configuration: () => require('@app/assets/configuration_icon.png'),
  logout: () => require('@app/assets/logout_icon.png'),
};

interface Props extends Omit<ImageProps, 'source'> {
  image: ImageCollection;
}

export default function ImageComponent(props: Props) {
  const getImage = useCallback(() => {
    const image = ImageDictionary[props.image]?.();
    return image;
  }, [props.image]);

  return <Image source={getImage()} {...props} />;
}
