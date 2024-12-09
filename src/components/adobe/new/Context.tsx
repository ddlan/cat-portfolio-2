import React, { type FC } from 'react';
import {
  Box, Heading, HStack, Image, VStack
} from '@chakra-ui/react';

import '../../../styles/styles.css';

import adobeLogo from '../../../images/new/adobe-logo.svg';
import adobeBox from '../../../images/new/adobe-box.png';

import SectionHeaderCard from '../../shared/SectionHeaderCard';
import MediaCard from './MediaCard';
import { SCard } from '../../../styles/components';
import { AdobeHeading } from '../../shared';

interface TProps {
  scrollRef: React.RefObject<HTMLDivElement>
}

const Context: FC<TProps> = ({ scrollRef }) => {
  return (
    <VStack
    w='100%'
    align='start'
    justifyContent='space-between'
    gap='20px'
  >
    <SectionHeaderCard title='Context' scrollRef={scrollRef} />
    <div>WIP</div>
  </VStack>
  );
};

export default Context;
