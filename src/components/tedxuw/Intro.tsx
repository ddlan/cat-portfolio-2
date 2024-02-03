import React, { type FC } from 'react';
import {
  Button, Heading, HStack,
  Text, VStack
} from '@chakra-ui/react';

import {
  Title, SideHeading,
  BodyText, Pink
} from '../../styles/components';
import '../../styles/styles.css';

const Intro: FC = () => {
  return (
    <>
      <Title>
        TEDx Talk Waterloo
      </Title>
      <Heading size="ml" color='#fff6'>Visual and Motion UI Design</Heading>
      <HStack alignItems='start'>
        <VStack alignItems='start' gap='0.25rem' flex='1'>
          <SideHeading mt='32px'>MY ROLE</SideHeading>
          <Text>Web Designer</Text>
          <Text>Motion Designer</Text>

          <SideHeading mt='32px'>TEAM</SideHeading>
          <Text>Web Designer</Text>
          <Text>Developer</Text>
          <Text>VP Marketing</Text>

          <SideHeading mt='32px'>TOOLS</SideHeading>
          <Text>Figma</Text>
          <Text>FigJam</Text>

          <SideHeading mt='32px'>TIMELINE</SideHeading>
          <Text>8 months</Text>
        </VStack>
        <VStack alignItems='start' gap='0.25rem' flex='3' mt='32px'>
          <BodyText>
            {/* eslint-disable-next-line max-len */}
            TEDxUW 2023, themed <Pink>&quot;From the Ground Up,&quot;</Pink> marks the first in-person TEDx Talk event by the University of Waterloo since the pandemic. This occasion symbolizes renewal and community reconnection.
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            Embracing this theme, the website is a hub for users to be empowered to bring their ideas to life and leave a lasting impact on the world around them.
            <br />
            <br />
          </BodyText>
          <HStack>
            <Button>Read WIP Case Study</Button>
            <Button>Live Website</Button>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Intro;
