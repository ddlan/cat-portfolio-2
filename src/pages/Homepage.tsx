import React, { type FC } from 'react';
import { Box, Container, Grid, GridItem, HStack } from '@chakra-ui/react';
import '../styles/styles.css';
import { SCard } from '../styles/components';
import { HEIGHT, MARGIN } from '../styles/constants';
import Navbar from '../components/Navbar';
import BrowserSidebar from '../components/homepage/BrowserSidebar';
import CaseStudyCard from '../components/cards/CaseStudyCard';

const Homepage: FC = () => {
  const caseStudies = [
    'Adobe',
    'TedxUW',
    'Challenge',
    'TechNova'
  ];

  return (
    <Box>
      <Navbar isWork={true} />
      <SCard
        h={`calc(100vh - ${HEIGHT.navbar} - ${MARGIN.homepageB})`}
        minW='630px'
        mx={MARGIN.homepageX}
        mb={MARGIN.homepageB}
        p='12px'
      >
        <HStack h='100%'>
          <BrowserSidebar isWork={true} />
          <HStack
            w='100%'
            h='100%'
            gap='12px'
            flexWrap='wrap'
            alignItems='stretch'
            alignContent='stretch'
          >
            {caseStudies.map(name =>
              <CaseStudyCard key={name} name={name} />
            )}
          </HStack>
        </HStack>
      </SCard>
    </Box>
  );
};

export default Homepage;
