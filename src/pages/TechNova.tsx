import React, { type FC } from 'react';
import {
  Box, Spacer
} from '@chakra-ui/react';

import '../styles/styles.css';

import wics from '../images/wics.png';

import Navbar from '../components/Navbar';
import BackToTop from '../components/shared/BackToTop';
import TechNovaIntro from '../components/technova/TechNovaIntro';
import { WideImage } from '../styles/components';
import WIP from '../components/technova/WIP';

const TechNova: FC = () => {
  return (
    <Box>
      <Navbar />
      <Box
        mt="100px"
        mx='20vw'
      >
        <TechNovaIntro />
        <Spacer height='200px' />

        <WideImage src={wics} />
        <Spacer height='200px' />

        <WIP />
        <Spacer height='50px' />

        <BackToTop />
        <Spacer height='50px' />
      </Box>
    </Box>
  );
};

export default TechNova;
