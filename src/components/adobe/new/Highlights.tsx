import React, { type FC } from 'react';
import {
  Box, Heading, HStack, Image, VStack
} from '@chakra-ui/react';

import '../../../styles/styles.css';

import adobeLogo from '../../../images/new/adobe-logo.svg';
import adobeBox from '../../../images/new/adobe-box.png';

import SectionHeaderCard from '../../../components/shared/SectionHeaderCard';
import MediaCard from '../../../components/adobe/new/MediaCard';
import { SCard } from '../../../styles/components';
import { AdobeHeading } from '../../shared';

interface TProps {
  scrollRef: React.RefObject<HTMLDivElement>
}

const Highlights: FC<TProps> = ({ scrollRef }) => {
  return (
    <VStack
    w='100%'
    align='start'
    justifyContent='space-between'
    gap='20px'
  >
    <SectionHeaderCard title='Highlights' scrollRef={scrollRef} />
    <MediaCard
      content={(
        <Box>
          <HStack p='16px' gap='16px'>
            <SCard p='20px'><Image src={adobeLogo} /></SCard>
            <VStack alignItems='start'>
              <AdobeHeading>
                Learning Platform for Adobe B2B Products
              </AdobeHeading>
              <Heading as='h4' fontSize='14px' fontFamily='Helvetica' fontWeight='400'>
                Since launch, achieved +500% Adobe credentialed, +300% retention, $4M+ revenue
              </Heading>
            </VStack>
          </HStack>
          {/* <Divider /> */}
          <Image src={adobeBox} w='100%' />
        </Box>
      )}
      sectionNum='0.0'
      sectionName='Thirty Second Case Summary'
      mediaType='Video'
    />
    <MediaCard
      content={<Box w='100%' h='400px'/>}
      sectionNum='0.1'
      sectionName='Homepage Motion Concept'
      mediaType='Image'
    />
    <HStack w='100%'>
      <MediaCard
        content={<Box w='100%' h='400px'/>}
        sectionNum='0.3'
        sectionName='Visual Components'
        mediaType='Image'
      />
      <MediaCard
        content={<Box w='100%' h='400px'/>}
        sectionNum='0.4'
        sectionName='Audio Experience'
        mediaType='Image'
      />
    </HStack>
  </VStack>
  );
};

export default Highlights;
