import React, { type FC } from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';

import {
  BodyText,
  Orange,
  SCard,
  SideHeading,
  SmallHeading,
  WideImage
} from '../../styles/components';
import '../../styles/styles.css';

import puzz1 from '../../images/puzz1.svg';
import bulletImg from '../../images/bullet.svg';
import adobeFigma from '../../images/adobe-figma.png';
import adobeResearch from '../../images/adobe-research.png';

import SectionTitle from '../shared/SectionTitle';

const Pieces: FC = () => {
  const prioritizations = (
    <HStack alignItems='stretch' pt='12px' gap='12px'>
      {
        [
          { emoji: '👾', text: 'Gamification elements (rewards, competition) in learning.' },
          {
            emoji: '🤝',
            text: 'Community for users to connect, help, and learn from each other.'
          },
          {
            emoji: '🏛️',
            text: 'Clear information architecture to balance the amount of content.'
          },
          {
            emoji: '♿️',
            text: 'Proactively use accessible design in-line with Adobe requirements.'
          },
          {
            emoji: '🌊',
            text: 'Consistency in design and verbiage across all DX credentialing.'
          }
        ].map(({ emoji, text }) => (
          <SCard key={emoji} flex='1' textAlign='center' p='12px' alignItems='center'>
            <Box w='fit-content' position='relative'>
              <Image src={bulletImg} h='40px' mb='8px'/>
              <SideHeading style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#000'
              }}>
                {emoji}
              </SideHeading>
            </Box>
            <BodyText>{text}</BodyText>
          </SCard>
        ))
      }
    </HStack>
  );

  return (
    <Box>
      <SectionTitle title='Pieces coming together' icon={puzz1}/>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        As a program manager, I did not have direct access to UX teams at Adobe since it was outside my jurisdiction. I decided to <Orange>leverage my connections and internal Adobe communication channels to build my own team of developers, designers, product managers, and researchers</Orange> (alongside my current team), to help me navigate through my design work.
        <br/><br/>
        {/* eslint-disable-next-line max-len */}
        After reviewing Adobe’s UX and accessibility guidelines, conducting user research, analyzing gathered data, and synthesizing the information into actionable insights, I prioritized these features in the concept:
      </BodyText>

      <SmallHeading mt='32px' mb='16px'>Feature Prioritizations</SmallHeading>
      {prioritizations}
      <SmallHeading mt='96px' mb='16px'>
        {/* eslint-disable-next-line max-len */}
        While I can’t show the conducted research in detail due to NDA, here is a high-level overview of the brainstorms and research done:
      </SmallHeading>

      <WideImage src={adobeFigma} />
      <WideImage src={adobeResearch} />
    </Box>
  );
};

export default Pieces;
