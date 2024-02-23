import React, { type FC } from 'react';
import { Box, HStack, Image, VStack } from '@chakra-ui/react';

import {
  BodyText,
  Orange,
  SCard,
  SectionHeading,
  SideHeading,
  SmallHeading
} from '../../styles/components';
import '../../styles/styles.css';

import puzz0 from '../../images/puzz0.svg';
import bulletImg from '../../images/bullet.svg';

import SectionTitle from '../shared/SectionTitle';

const Choosing: FC = () => {
  const plan = (
    <VStack alignItems='stretch' gap='24px' flex='1'>
      {
        [
          {
            title: 'Synthesize research',
            subtitle: 'Context & constraints'
          },
          {
            title: 'Amalgamate findings',
            subtitle: 'Research & analytics'
          },
          {
            title: 'Visual design direction',
            subtitle: 'Design & brand system'
          },
          {
            title: 'Rapid prototyping',
            subtitle: 'Product spec & components'
          },
          {
            title: 'Test and iterate',
            subtitle: 'Edge cases'
          }
        ].map(({ title, subtitle }, index) => (
          <HStack key={title} gap='16px'>
            <Box w='fit-content' position='relative'>
              <Image src={bulletImg} h='40px' mb='8px'/>
              <SideHeading style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#000'
              }}>
                {index + 1}
              </SideHeading>
            </Box>
            <VStack alignItems='start'>
              <SectionHeading fontSize='16px' style={{ marginBottom: '-4px' }}>
                {title}
              </SectionHeading>
              <BodyText color='#878787'>{subtitle}</BodyText>
            </VStack>
        </HStack>
        ))
      }
    </VStack>
  );

  return (
    <Box>
      <SectionTitle title='Choosing the Puzzle' icon={puzz0}/>
      <HStack gap='24px'>
        {plan}
        <VStack alignItems='start' flex='2' >
          <SmallHeading mt='32px' mb='16px'>Design Process</SmallHeading>
          <BodyText>
            <Orange style={{ fontStyle: 'italic' }}>
              {/* eslint-disable-next-line max-len */}
              How might we design a web experience that effectively excites long-term, continuous learning for professional skilling? Can “play” accelerate upskilling?
            </Orange>
            <br/><br/>
            {/* eslint-disable-next-line max-len */}
            After reviewing Adobe’s UX and accessibility guidelines, conducting user research, analyzing gathered data, and synthesizing the information into actionable insights, I prioritized these features in the concept:
          </BodyText>
          <SmallHeading mt='48px' mb='16px'>
            The Challenge
          </SmallHeading>
          <BodyText>
            {/* eslint-disable-next-line max-len */}
            The scope of the project to create a training platform and website would be difficult within a 2-month deadline, especially as this was a stretch project. I decided to pivot and optimize mine and the team’s time by planning what features to prioritize within the concept designs, to clearly identify the developmental advocation and resources required.
          </BodyText>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Choosing;
