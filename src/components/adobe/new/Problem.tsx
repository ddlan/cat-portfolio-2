import React, { type FC } from 'react';
import {
  Grid, GridItem, HStack, Image, ListItem, Text, UnorderedList, VStack
} from '@chakra-ui/react';

import '../../../styles/styles.css';

import circleX from '../../../images/new/circle-x.svg';
import circleCheck from '../../../images/new/circle-check.svg';

import SectionHeaderCard from '../../shared/SectionHeaderCard';
import { SCard } from '../../../styles/components';
import { AdobeHeading } from '../../shared';
import styled from 'styled-components';

const SGridItem = styled(GridItem).attrs({
  borderRadius: '4px',
  border: '#f2f2f2 solid 1px',
  p: '12px'
})``;

interface TProps {
  scrollRef: React.RefObject<HTMLDivElement>
}

const Problem: FC<TProps> = ({ scrollRef }) => {
  return (
    <VStack
    w='100%'
    align='start'
    justifyContent='space-between'
    gap='20px'
  >
    <SectionHeaderCard title='Problem' scrollRef={scrollRef} />
    <SCard w='100%' p='16px' gap='16px'>
      <AdobeHeading>Learning was being gate-kept</AdobeHeading>
      <Grid templateColumns='repeat(2, 1fr)' >
        <SGridItem>
          <HStack alignItems='center' h='100%'>
            <Image src={circleX} />
            <Text fontWeight='500' color='black' fontSize='16px'>
              Even Adobe partnered companies struggled:
            </Text>
          </HStack>
        </SGridItem>
        <SGridItem>
        <UnorderedList>
          <ListItem fontSize='14px' fontFamily='Helvetica' lineHeight='1.2'>
            Existing sandboxes and requesting on-demand synchronous training was{' '}
            not an automized process for company partners.
          </ListItem>
          <br/>
          <ListItem fontSize='14px' fontFamily='Helvetica' lineHeight='1.2'>
            Everyday users were unable to access sandboxes and on-demand synchronous training at all.
          </ListItem>
</UnorderedList>
        </SGridItem>
        <SGridItem>
          <HStack alignItems='center' h='100%'>
            <Image src={circleCheck} />
            <Text fontWeight='500' color='black' fontSize='16px'>
              Emerging opportunities:
            </Text>
          </HStack>
        </SGridItem>
        <SGridItem>
        <UnorderedList>
          <ListItem fontSize='14px' fontFamily='Helvetica' lineHeight='1.2'>
            How would the learning experience change if a “Learning Platform” existed?
          </ListItem>
          <br/>
          <ListItem fontSize='14px' fontFamily='Helvetica' lineHeight='1.2'>
            What if we allowed all users to easily access training and sandboxes?
          </ListItem>
</UnorderedList>
        </SGridItem>
      </Grid>
    </SCard>
  </VStack>
  );
};

export default Problem;
