import React, { type FC } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { BodyText, SmallHeading } from '../../styles/components';
import '../../styles/styles.css';

import designChallenge from '../../images/design-challenge.png';

import SectionTitle from '../shared/SectionTitle';

const Difficult: FC = () => {
  return (
    <Box>
      <SectionTitle title='🌊 Difficult Waters' hideIcon={true}/>
      <SmallHeading>Fail Fast, Learn Faster</SmallHeading>
      <BodyText>
      {/* eslint-disable-next-line max-len */}
      Excited to jump into this challenge,  I immediately started designing whatever I desired and faced the inevitable consequence of “what happens when you don’t take the time to plan and understand the problem or goal you are aiming for”. To address the time lost redoing work due to a lack of research and planning, I decided to create a working-methodology, based off of the design sprint formula, to implement into my work.
      </BodyText>
      <Image mt='24px' src={designChallenge} />
    </Box>
  );
};

export default Difficult;
