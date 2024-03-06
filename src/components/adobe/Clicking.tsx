import React, { type FC } from 'react';
import { Box } from '@chakra-ui/react';

import {
  BodyText,
  Orange,
  SmallHeading
} from '../../styles/components';
import '../../styles/styles.css';

import puzz2 from '../../images/puzz2.svg';

import SectionTitle from '../shared/SectionTitle';
import { LINKEDIN } from '../../constants';
import LoudButton from '../shared/LoudButton';

const Clicking: FC = () => {
  return (
    <Box>
      <SectionTitle title='Clicking Into Place' icon={puzz2}/>
      <SmallHeading mt='32px' mb='16px'>What&apos;s Next</SmallHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        After my internship, the training and certification platform is now being moved forward, full-steam ahead! The concept design was used for my final pitch, and I, alongside my team, were able to <Orange>advocate and receive the resources needed for the training to be an actualized project--as a result, I was onboarded to the team again</Orange> in mid-2023 to continue my UX design and research work.
        <br/><br/>
        As much of the content is under NDA, if you’re interested in learning more, let’s connect!
      </BodyText>

      <LoudButton as='a' href={LINKEDIN} target='_blank' mt='24px'>
        Reach Out On LinkedIn ↗
      </LoudButton>
    </Box>
  );
};

export default Clicking;
