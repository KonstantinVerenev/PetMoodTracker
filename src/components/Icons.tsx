import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export const HomeIcon: React.FC<IconProps> = ({
  size = 40,
  color = 'black',
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <Path d="m23.121 9.069-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.879 9.069A2.978 2.978 0 0 0 0 11.19v9.817a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V11.19a2.978 2.978 0 0 0-.879-2.121ZM15 22.007H9v-3.934a3 3 0 0 1 6 0Zm7-1a1 1 0 0 1-1 1h-4v-3.934a5 5 0 0 0-10 0v3.934H3a1 1 0 0 1-1-1V11.19a1.008 1.008 0 0 1 .293-.707L9.878 2.9a3.008 3.008 0 0 1 4.244 0l7.585 7.586a1.008 1.008 0 0 1 .293.704Z" />
    </Svg>
  );
};

export const ListIcon: React.FC<IconProps> = ({
  size = 40,
  color = 'black',
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <Path d="M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
      <Circle cx={2} cy={5} r={2} />
      <Circle cx={2} cy={12} r={2} />
      <Circle cx={2} cy={19} r={2} />
    </Svg>
  );
};

export const StatIcon: React.FC<IconProps> = ({
  size = 40,
  color = 'black',
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <Path d="M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" />
      <Path d="M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM10 10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM15 13v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM20 9v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0ZM6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9Z" />
    </Svg>
  );
};
