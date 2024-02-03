import React, { type FC } from 'react';
import {
  Box,
  Image,
  Spacer
} from '@chakra-ui/react';

import portfolio from '../images/ted-portfolio.png';
import '../styles/styles.css';
import Navbar from '../components/Navbar';
import Intro from '../components/tedxuw/Intro';
import Problem from '../components/tedxuw/Problem';
import Empathy from '../components/tedxuw/Empathy';

const TedxUW: FC = () => {
  return (
    <Box>
      <Navbar />
      <Box
        mt="100px"
        mx='20vw'
      >
        <Intro />
        <Spacer height='200px' />

        <Image src={portfolio} />
        <Spacer height='200px' />

        <Problem />
        <Spacer height='200px' />

        <Empathy />
        <Spacer height='200px' />
      </Box>
    </Box>
  );
};

export default TedxUW;
