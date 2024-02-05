import React, { type FC } from 'react';
import {
  Box
} from '@chakra-ui/react';

import '../styles/styles.css';
import Navbar from '../components/Navbar';
import AdobeIntro from '../components/adobe/AdobeIntro';

const Adobe: FC = () => {
  return (
    <Box>
      <Navbar />
      <Box
        mt="100px"
        mx='20vw'
      >
        <AdobeIntro />
      </Box>
    </Box>
  );
};

export default Adobe;
