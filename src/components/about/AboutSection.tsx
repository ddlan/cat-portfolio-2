import React, { type FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import '../../styles/styles.css';
import { SCard } from '../../styles/components';

import DonutChart from './DonutChart';
import IntroCard from './IntroCard';
import MindMap from './MindMap';
import Toolbox from './Toolbox';

const AboutSection: FC = () => {
  const renderChart = () => (
    <SCard p='20px 12px 20px 12px'>
      <DonutChart />
    </SCard>
  );

  return (
    <Grid templateColumns='repeat(2, 1fr)' gap='12px'>
      <GridItem w='100%'>
        <IntroCard />
      </GridItem>
      <GridItem w='100%'>
        <MindMap />
      </GridItem>
      <GridItem w='100%'>
        {renderChart()}
      </GridItem>
      <GridItem w='100%'>
        <Toolbox />
      </GridItem>
    </Grid>
  );
};

export default AboutSection;
