import React, { useRef, type FC } from 'react';
import {
  Box, Spacer
} from '@chakra-ui/react';

import adobeCloud from '../images/adobe-cloud.png';
import '../styles/styles.css';

import Navbar from '../components/Navbar';
import AdobeIntro from '../components/adobe/AdobeIntro';
import Pieces from '../components/adobe/Pieces';
import { WideImage } from '../styles/components';
import Clicking from '../components/adobe/Clicking';
import Unforgettable from '../components/adobe/Unforgettable';
import BackToTop from '../components/shared/BackToTop';

const Adobe: FC = () => {
  const takeawaysRef = useRef<HTMLDivElement>(null);
  const scrollToTakeaways = (): void => {
    takeawaysRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Navbar />
      <Box
        mt="100px"
        mx='20vw'
      >
        <AdobeIntro scrollToTakeaways={scrollToTakeaways} />
        <Spacer height='200px' />

        <WideImage src={adobeCloud} />
        <Spacer height='200px' />

        <Pieces />
        <Spacer height='200px' />

        <Clicking />
        <Spacer height='200px' />

        <Unforgettable takeawaysRef={takeawaysRef} />
        <Spacer height='200px' />

        <BackToTop />
        <Spacer height='50px' />
      </Box>
    </Box>
  );
};

export default Adobe;
