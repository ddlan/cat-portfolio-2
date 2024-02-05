import React, { type FC } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { Blue, BodyText, SmallHeading } from '../../styles/components';
import '../../styles/styles.css';

import journeyMap from '../../images/journey-map.png';

import SectionTitle from '../shared/SectionTitle';

const Riding: FC = () => {
  return (
    <Box>
      <SectionTitle title='🏄🏻‍♀️ Riding the Waves' hideIcon={true}/>
      <SmallHeading>What I Learned</SmallHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        You won’t like everything that you make, and as always with learning new skills, there will be attempts that you feel aren’t the best you can do. I don’t think I’ll ever be at a point where I’m “good enough”, but I learned to <Blue>chase improvement, not perfection.</Blue>
        <br/><br/>
        {/* eslint-disable-next-line max-len */}
        It didn’t matter how many years of experience my teammates had; working with others shone a light on my opportunities for growth and knowing this allowed me to build a more well-rounded perspective in approaching design. The best features and ideas came from pushback from the teams I worked with.
        <br/><br/>
        {/* eslint-disable-next-line max-len */}
        Most importantly, it was fun! The challenge was something I woke up excited to do. I couldn’t wait to learn more. While the challenge is over, co-creating was something I found extremely valuable and will continue to do.
      </BodyText>
      <Image mt='24px' src={journeyMap} />
    </Box>
  );
};

export default Riding;
