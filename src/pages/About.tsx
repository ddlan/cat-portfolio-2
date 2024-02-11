import React, { type FC } from 'react';
import { Box, Image, Grid, GridItem, HStack, Text, VStack, Container } from '@chakra-ui/react';

import changeWorld from '../images/change-world.png';
import computer from '../images/computer.svg';
import pathsPhone from '../images/paths-phone.png';
import nodeEditor from '../images/node-editor.png';
import mindMap from '../images/mind-map.png';

import '../styles/styles.css';
import { SCard, SGridCard } from '../styles/components';
import { HEIGHT, MARGIN } from '../styles/constants';
import Navbar from '../components/Navbar';
import BrowserSidebar from '../components/homepage/BrowserSidebar';
import styled from 'styled-components';
import ChangeWorld from '../components/about/ChangeWorld';

const About: FC = () => {
  return (
    <Box>
      <Navbar isWork={false}/>
      <SCard
        h={`calc(100vh - ${HEIGHT.navbar} - ${MARGIN.homepageB})`}
        minH='600px'
        minW='800px'
        mx={MARGIN.homepageX}
        mb={MARGIN.homepageB}
        p='12px'
      >
        <HStack maxH='100%'>
          <BrowserSidebar isWork={false} />
          <Grid
            maxW='100%'
            maxH='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap='12px'
          >
            <GridItem><ChangeWorld /></GridItem>
            <GridItem>
              <SGridCard>
                <div style={{ height: '40px' }}/>
                <Image src={computer} px='24px'/>
                <Text className='scard-caption'>My Toolbox</Text>
              </SGridCard>
            </GridItem>
            <GridItem rowSpan={2}>
              <SGridCard>
                <div style={{ height: '40px' }}/>
                <Image src={pathsPhone} px='32px'/>
                <Text className='scard-caption'>Directory of Paths I&apos;ve Taken</Text>
              </SGridCard>
            </GridItem>
            <GridItem colSpan={2} minH='0'>
              <SGridCard>
                <HStack minH='0'>
                  <Image src={nodeEditor} p='16px' maxH='100%'/>
                  <VStack minH='0' h='100%'
                    justifyContent='space-between' maxW='100%' flex='1'
                  >
                    <div style={{ height: '30px' }}/>
                    <Image src={mindMap} maxH='180px' position='absolute'
                      height='100%' top='0'
                    />
                    <Container w='100%' justifyContent='end'>
                      <Text className='scard-caption'>Mind Map of My Interests</Text>
                    </Container>
                  </VStack>
                </HStack>
              </SGridCard>
            </GridItem>
          </Grid>
        </HStack>
      </SCard>
    </Box>
  );
};

export default About;
