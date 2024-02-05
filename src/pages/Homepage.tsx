import React, { type FC } from 'react';
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import '../styles/styles.css';
import { SCard } from '../styles/components';
import { HEIGHT, MARGIN } from '../styles/constants';
import Navbar from '../components/Navbar';
import BrowserSidebar from '../components/homepage/BrowserSidebar';
import CaseStudyCard from '../components/cards/CaseStudyCard';

const Homepage: FC = () => {
  const caseStudies = [
    'TedxUW',
    'Adobe',
    'Challenge',
    'TechNova'
  ];

  return (
    <Box>
      <Navbar />
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
            templateColumns='repeat(2, 1fr)'
            gap='12px'
          >
            {caseStudies.map(name =>
              <GridItem key={name}>
                <CaseStudyCard name={name} />
              </GridItem>)
            }
          </Grid>
        </HStack>
      </SCard>
    </Box>
  );
};

export default Homepage;
