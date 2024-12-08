import React, { type FC } from 'react';
import { VStack, Text, HStack, Box } from '@chakra-ui/react';

import '../../../styles/styles.css';
import { SCard } from '../../../styles/components';

interface TProps {
  content: React.ReactNode
  sectionNum: string
  sectionName: string
  mediaType: string
}

const MediaCard: FC<TProps> = ({
  content, sectionNum, sectionName, mediaType
}) => {
  return (
    <VStack alignItems='end' w='100%'>
      <SCard w='100%' p='0'>
        {content}
      </SCard>
      <HStack>
        <Text fontFamily='AdobeClean'><b>{sectionNum}</b> {sectionName}</Text>
        <Box
          p='3px 6px'
          background='white'
          border='#f2f2f2 1px solid'
          borderRadius='6px'
        >
          <Text fontSize='xs'>{mediaType}</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default MediaCard;
