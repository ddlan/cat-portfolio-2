import React, { type CSSProperties, type FC } from 'react';
import '../../styles/styles.css';
import { Button, Image } from '@chakra-ui/react';

interface TProps {
  href: string
  image: string
  style?: CSSProperties
};

const LinkButton: FC<TProps> = ({ href, image, style }) => {
  return (
    <Button as='a' href={href} h='38px' w='38px' borderRadius='100px'
      background='transparent' border='1px solid #f2f2f2' padding='0'
      style={style}
    >
      <Image src={image} />
    </Button>
  );
};

export default LinkButton;
