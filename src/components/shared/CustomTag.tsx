import React, { type FC } from 'react';
import '../../styles/styles.css';
import { Text } from '@chakra-ui/react';
import { SCard } from '../../styles/components';

interface TProps {
  tag: string
};

const CustomTag: FC<TProps> = ({ tag }) => {
  return (
    <SCard key={tag} p='5px 13px 5px 13px' background='rgb(250, 250, 250)'>
      <Text>{tag}</Text>
    </SCard>
  );
};

export default CustomTag;
