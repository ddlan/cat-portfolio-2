import React, { type FC } from 'react';
import { Text, VStack, Image, Grid, GridItem } from '@chakra-ui/react';

import '../../styles/styles.css';
import { SCard, SHeading } from '../../styles/components';

import paper from '../../images/new/paper.svg';
import figma from '../../images/new/figma.svg';
import notion from '../../images/new/notion.svg';
import miro from '../../images/new/miro.svg';
import fiveApp from '../../images/new/logo-r.svg';
import framer from '../../images/new/framer.svg';
import userTesting from '../../images/new/logo-u.svg';

const tools = [
  { name: 'Figma', image: figma },
  { name: 'Notion', image: notion },
  { name: 'Miro', image: miro },
  { name: 'five.app', image: fiveApp },
  { name: 'Framer', image: framer },
  { name: 'usertesting.com', image: userTesting }
];

const Toolbox: FC = () => {
  return (
    <SCard p='36px 16px 36px 16px' h='344px'>
      <VStack align='start' gap='4px'>
        <SHeading color='black' fontWeight='400' fontSize='26px'>My Design Toolbox</SHeading>
        <Text mb='24px'>Software I use that I&apos;m obsessed with.</Text>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap='12px'
        >
          {tools.map(({ name, image }) => (
            <GridItem key={name}>
              <SCard h='84px' w='84px' border='white 4px solid' style={{ backgroundImage: `url(${paper})` }}>
                <Image src={image} alt={name} maxW='24px' maxH='24px' m='auto' />
              </SCard>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </SCard>
  );
};

export default Toolbox;
