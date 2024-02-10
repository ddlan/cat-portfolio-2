import React, { type FC } from 'react';
import {
  Box, Spacer
} from '@chakra-ui/react';

import '../styles/styles.css';

import Navbar from '../components/Navbar';
import BackToTop from '../components/shared/BackToTop';
import ChallengeIntro from '../components/challenge/ChallengeIntro';
import Difficult from '../components/challenge/Difficult';
import Riding from '../components/challenge/Riding';

const Challenge: FC = () => {
  return (
    <Box>
      <Navbar isWork={true} />
      <Box
        mt="100px"
        mx='20vw'
      >
        <ChallengeIntro />
        <Spacer height='200px' />

        <Difficult />
        <Spacer height='200px' />

        <Riding />
        <Spacer height='200px' />

        <BackToTop />
        <Spacer height='50px' />
      </Box>
    </Box>
  );
};

export default Challenge;
