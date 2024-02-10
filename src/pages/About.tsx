import React, { type FC } from 'react';
import { Box, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import '../styles/styles.css';
import { SCard } from '../styles/components';
import { HEIGHT, MARGIN } from '../styles/constants';
import Navbar from '../components/Navbar';
import BrowserSidebar from '../components/homepage/BrowserSidebar';

const About: FC = () => {
  return (
    <Box>
      <Navbar isWork={false}/>
      <SCard
        h={`calc(100vh - ${HEIGHT.navbar} - ${MARGIN.homepageB})`}
        mx={MARGIN.homepageX}
        mb={MARGIN.homepageB}
        p='12px'
      >
        <HStack h='100%'>
          <BrowserSidebar />
          <Grid
            w='100%'
            h='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap='12px'
          >
            <GridItem>
              <Text>asdf</Text>
            </GridItem>
          </Grid>
        </HStack>
      </SCard>
    </Box>
  );
};

export default About;
