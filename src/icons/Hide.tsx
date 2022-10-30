import React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export const HideIcon = (props: SvgProps) => (
  <Svg
    /* @ts-ignore: Unreachable code error*/
    xmlns="http://www.w3.org/2000/svg"
    width={20.453}
    height={16.104}
    {...props}>
    {/* @ts-ignore: Unreachable code error*/}
    <G fill="none" stroke="#242121" strokeLinecap="round" strokeWidth={1.5}>
      {/* @ts-ignore: Unreachable code error*/}
      <G strokeLinejoin="round" strokeMiterlimit={10}>
        <Path
          data-name="Stroke 1"
          d="M13.615 8.052a3.162 3.162 0 1 1-3.162-3.162 3.162 3.162 0 0 1 3.162 3.162Z"
        />
        <Path
          data-name="Stroke 3"
          d="M10.451 15.35c3.808 0 7.291-2.738 9.252-7.3-1.961-4.562-5.444-7.3-9.252-7.3h0c-3.804 0-7.287 2.738-9.248 7.3 1.961 4.564 5.444 7.3 9.252 7.3Z"
        />
      </G>
      <Path data-name="Trazado 52739" d="M1.039 13.905 19.19 1.898" />
    </G>
  </Svg>
);
