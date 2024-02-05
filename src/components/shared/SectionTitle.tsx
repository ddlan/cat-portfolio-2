import React, { type FC } from 'react';
import { Image, HStack } from '@chakra-ui/react';
import folder from '../../images/folder.svg';
import { Title } from '../../styles/components';

interface TProps {
  title: string
  icon?: string
}

const SectionTitle: FC<TProps> = ({ title }) => {
  console.log(typeof folder);
  return (
    <HStack mb='20px' alignItems='center' gap='12px'>
        <Image src={folder} width='36px' mb='10px' />
        <Title> {title}</Title>
    </HStack>
  );
};

export default SectionTitle;
