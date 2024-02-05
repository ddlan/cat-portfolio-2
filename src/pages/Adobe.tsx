import React, { type FC } from 'react';
import {
  Box, Image, Spacer
} from '@chakra-ui/react';

import adobeCloud from '../images/adobe-cloud.png';
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
        <Spacer height='200px' />

        <Image src={adobeCloud} width='90vw' maxWidth='90vw'
        position='relative' left='50%' transform='translate(-50%, 0)'
      />
        <Spacer height='200px' />
      </Box>
    </Box>
  );
};

export default Adobe;
