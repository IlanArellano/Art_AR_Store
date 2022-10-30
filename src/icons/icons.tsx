import React, {useMemo} from 'react';
import {SvgProps} from 'react-native-svg';

//Icons
import {CloseIcon} from './CloseIcon';
import {ShowIcon} from './Show';
import {HideIcon} from './Hide';
import {SearchIcon} from './Search';
import {HomeIcon} from './Home';

export type IconsKeys = 'close' | 'show' | 'hide' | 'search' | 'home';
export type IconType = (props: SvgProps) => React.ReactElement;

export const Icons: IconsCollection = {
  close: props => <CloseIcon {...props} />,
  hide: props => <HideIcon {...props} />,
  show: props => <ShowIcon {...props} />,
  search: props => <SearchIcon {...props} />,
  home: props => <HomeIcon {...props} />,
};

interface IconsComponentProps extends SvgProps {
  icon: IconsKeys;
}

export const IconsComponent = (props: IconsComponentProps) => {
  const Icon = useMemo(() => Icons[props.icon], [props.icon]);

  if (!Icon) return null;
  return <Icon {...props} />;
};

export type IconsCollection = Record<IconsKeys, IconType>;
