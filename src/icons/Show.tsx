import React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export const ShowIcon = (props: SvgProps) => (
  /* @ts-ignore: Unreachable code error*/
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={16.104} {...props}>
    {/* @ts-ignore: Unreachable code error*/}
    <G
      data-name="Show"
      fill="none"
      stroke="#242121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}>
      <Path
        data-name="Stroke 1"
        d="M13.162 8.052A3.162 3.162 0 1 1 10 4.89a3.162 3.162 0 0 1 3.162 3.162Z"
      />
      <Path
        data-name="Stroke 3"
        d="M9.998 15.35c3.808 0 7.291-2.738 9.252-7.3-1.961-4.562-5.444-7.3-9.252-7.3h0C6.194.75 2.711 3.488.75 8.05c1.961 4.564 5.444 7.3 9.252 7.3Z"
      />
    </G>
  </Svg>
);
