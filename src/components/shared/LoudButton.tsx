import React, { type FC } from 'react';
import '../../styles/styles.css';
import { Button, type ButtonProps } from '@chakra-ui/react';
import click from '../../res/audio/Button Click.wav';
import useSound from 'use-sound';

const LoudButton: FC<ButtonProps & { href?: string, target?: string }> = (props) => {
  const [play] = useSound(click as string);
  return (
    <Button {...props} onClick={e => {
      play();
      props.onClick?.(e);
    }} />
  );
};

export default LoudButton;
