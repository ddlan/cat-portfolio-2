import React, { type Ref, type FC } from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';

import {
  BodyText,
  SmallHeading
} from '../../styles/components';
import '../../styles/styles.css';

import puzz3 from '../../images/puzz3.svg';
import adobeMission from '../../images/adobe-mission.png';

import LessonCard from '../shared/LessonCard';
import SectionTitle from '../shared/SectionTitle';

interface TProps {
  takeawaysRef: Ref<HTMLDivElement>
}

const Unforgettable: FC<TProps> = ({ takeawaysRef }) => {
  return (
    <Box ref={takeawaysRef}>
      <SectionTitle title='Unforgettable Memories' icon={puzz3}/>
      <SmallHeading mt='32px' mb='16px'>My Takeaways</SmallHeading>

      <HStack alignItems='stretch' gap='12px' my='16px'>
        {[
          {
            title: '🔊️ UX Advocation',
            // eslint-disable-next-line max-len
            body: 'Proposing UX strategy with those who were new to UX meant I learned how to concisely communicate user needs and ensure the team was involved and informed of the process. Change management may be difficult but is possible to do bottom-up!'
          },
          {
            title: '📊 Power of Research and Data',
            // eslint-disable-next-line max-len
            body: 'I learned how to effectively present my designs and ideas so it was easily digestible, and clearly conveyed design decisions based on research and data. Numbers with a clear objective ensures seamless design feedback back-and-forth.'
          }
        ].map(({ title, body }) => (
          <LessonCard key={title} title={title} body={body} />
        ))}
      </HStack>

      <BodyText>
        {/* eslint-disable-next-line max-len */}
        This journey on the Adobe DX Credentialing team not only allowed me to contribute meaningfully to the accreditation program but also provided invaluable insights into the intricate world of UX/UI and the value of a strong team culture, shaping my approach to design and research for the years to come!
        <br/><br/>
        {/* eslint-disable-next-line max-len */}
        Thank you so much to so many people; Tyler, Ayana, Nick, Jarrel, Leana, Rida, Neha, Steve, Ishika, Ruth...the list goes on and on 💜
      </BodyText>

      <SmallHeading mt='32px' style={{ marginBottom: '16px' }}>A Lil’ Inside Joke ;)</SmallHeading>
      <Image src={adobeMission} />
    </Box>
  );
};

export default Unforgettable;
