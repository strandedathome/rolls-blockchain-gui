import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as PecanRollsIcon } from './images/pecanrolls-512.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={PecanRollsIcon} viewBox="0 0 512 512" {...props} />;
}
