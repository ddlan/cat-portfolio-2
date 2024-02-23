import React, { type FC } from 'react';
import {
  Box, HStack,
  Image
} from '@chakra-ui/react';

import schedule1 from '../../images/schedule1.png';
import schedule2 from '../../images/schedule2.png';
import {
  SCard, BodyText,
  SectionHeading,
  PrototypeFrame
} from '../../styles/components';
import '../../styles/styles.css';

import SectionTitle from '../shared/SectionTitle';
import { PROTOTYPES } from '../../constants';

const Wireframing: FC = () => {
  return (
    <Box alignItems='start'>
      <SectionTitle title='Wireframing' />

      <SectionHeading mb='20px'>First Iteration</SectionHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        We started brainstorming the structure of the website and did a light round of testing to get opinions on the different designs. One of the struggles we had was deciding how the “Schedule” sections were structured. The design would be heavily graphical to embody the story-driven goal--all graphics have a purpose in the theme.
        <br /><br />
        {/* eslint-disable-next-line max-len */}
        These two options for the schedule were apart of some of the options we were choosing between.
      </BodyText>

      <HStack gap='12px' my='24px'>
        <Box>
          <SCard>
            <Image src={schedule1} />
          </SCard>
        </Box>
        <SCard>
          <Image src={schedule2} />
        </SCard>
      </HStack>
      <HStack alignItems='stretch' gap='12px'>
        <SCard p='16px' flex='1'>
          <BodyText>
            🟢 Uses less vertical page space<br />
            🔴 Not mobile friendly; condensed format makes it difficult to read<br />
            🔴 Not glanceable; difficult to find what you’re looking for with a quick look over
          </BodyText>
        </SCard>
        <SCard p='16px' flex='1'>
          <BodyText>
            🟢 Incorporates design elements reflective of talk theme<br />
            {/* eslint-disable-next-line max-len */}
            🟢 Clear “order” of schedule; in-line with popular schedule designs (i.e. calendar apps); ease of navigation
          </BodyText>
        </SCard>
      </HStack>

      <SectionHeading mt='64px' mb='20px'>Final Designs</SectionHeading>
      <BodyText mb='12px'>
        {/* eslint-disable-next-line max-len */}
        Next came the hi-fidelity and prototyping stage, where we would implement all of our branding and visual design within the structural logic of our wireframes based on our research, low-fidelity, and user-testing on our low-fidelity.
        <br /><br />
        The interactable desktop designs are as follows:
      </BodyText>

      <PrototypeFrame className='wide-prototype' src={PROTOTYPES.tedxuw} />

    </Box>
  );
};

export default Wireframing;
