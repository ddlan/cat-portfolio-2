import React, { type FC } from 'react';
import {
  Box, Button, Heading, HStack,
  Image, ListItem,
  Spacer, Text, UnorderedList, VStack
} from '@chakra-ui/react';
import styled from 'styled-components';

import folder from '../images/folder.svg';
import portfolio from '../images/ted-portfolio.png';
import jordan from '../images/jordan.png';
import { SCard, SDivider } from '../styles/components';
import '../styles/styles.css';
import Navbar from '../components/Navbar';

const Title = styled(Heading).attrs({
  size: 'xl',
  mb: '10px',
  fontWeight: '800',
  fontSize: '40px'
})``;

const SideHeading = styled(Heading).attrs({
  fontWeight: 800,
  size: 'ml',
  color: '#fff6',
  mt: '32px'
})``;

const SectionHeading = styled(Heading).attrs({
  fontWeight: 600,
  size: 'lg',
  color: '#fff',
  mb: '8px'
})``;

const BodyText = styled(Text).attrs({
  lineHeight: '26px'
})``;

const Pink = styled.span`
  color: #F890BA
`;

const CTACard = styled(SCard).attrs({
  p: '16px',
  flex: '1',
  width: '100%',
  height: '100px'
})``;

const TedxUW: FC = () => {
  return (
    <Box>
      <Navbar />
      <Box
        mt="100px"
        mx='20vw'
      >
        <Title>
          TEDx Talk Waterloo
        </Title>
        <Heading size="ml" color='#fff6'>Visual and Motion UI Design</Heading>
        <HStack alignItems='start'>
          <VStack alignItems='start' gap='0.25rem' flex='1'>
            <SideHeading>MY ROLE</SideHeading>
            <Text>Web Designer</Text>
            <Text>Motion Designer</Text>

            <SideHeading>TEAM</SideHeading>
            <Text>Web Designer</Text>
            <Text>Developer</Text>
            <Text>VP Marketing</Text>

            <SideHeading>TOOLS</SideHeading>
            <Text>Figma</Text>
            <Text>FigJam</Text>

            <SideHeading>TIMELINE</SideHeading>
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
        <Spacer height='200px' />
        <Image src={portfolio} />
        <Spacer height='200px' />

        <HStack mb='20px' alignItems='center' gap='12px'>
          <Image src={folder} width='36px' mb='10px'/>
          <Title> The Problem</Title>
        </HStack>
        <HStack alignItems='start' gap='20px'>
          <VStack alignItems='start' flex='1'>
            <SectionHeading>
              The Challenge
            </SectionHeading>
            <BodyText>
              {/* eslint-disable-next-line max-len */}
              Our objective was to create a digital platform that would not just inform, but also inspire. It needed to be a beacon for renewed conversations, a gallery of ground&shy;breaking ideas, and a testament to the resilience and creativity of the human spirit in bringing their ideas to life.
            </BodyText>
          </VStack>
          <VStack alignItems='start' flex='1'>
            <SectionHeading>
              My Design Process
            </SectionHeading>
            <BodyText>
              {/* eslint-disable-next-line max-len */}
              <Pink>How might we design a web experience that effectively embodies the excitement associated with the theme of growth and ‘from the ground up’?</Pink>
              <br/>
              <br/>
              {/* eslint-disable-next-line max-len */}
              My job was to iterate on the end-to-end web design process to ensure we were efficient in our time, including:
            </BodyText>
          </VStack>
        </HStack>

        <VStack alignItems='start' flex='1' mt="24px">
          <SectionHeading>
            User Persona and JTBD
          </SectionHeading>
          <BodyText>
            {/* eslint-disable-next-line max-len */}
            We knew there would be multiple phases of the website, depending on the timeline of the event. Thus, it would be reflective of our target market as well. To make our process more efficient, based on our goal to achieve a certain number of attendees and financial sponsorship, we narrowed our primary target market down to the following:
          </BodyText>
        </VStack>

        <HStack mt='24px'>
          <SCard p='24px' flex='2' alignItems='center'>
            <HStack>
              <Image src={jordan} width='150px' borderRadius='8px'/>
              <VStack alignItems='start' gap='0' ml='12px'>
                <SectionHeading style={{ marginBottom: '0' }}>
                  Jordan
                </SectionHeading>
                <SideHeading mb='8px' style={{ marginTop: '0' }}>
                  New in Career / Running an Early Start-up
                </SideHeading>
                <BodyText flexGrow="1">
                  {/* eslint-disable-next-line max-len */}
                  Jordan is a recent graduate and has had a few internships. Jordan is dabbling in personal and professional projects to help navigate what they want to do with their life.
                </BodyText>
              </VStack>
            </HStack>
            <SDivider
              style={{ marginTop: '30px', width: '90%' }}
            />
            <HStack alignItems='start'>
              <VStack alignItems='start' flex='1'>
                <SideHeading style={{ color: 'white' }}>
                  Job to Be Done
                </SideHeading>
                <UnorderedList>
                  <ListItem>
                    <BodyText>
                    Gaining insight and inspiration for career / personal paths
                    </BodyText>
                  </ListItem>
                  <ListItem>
                    <BodyText>
                      Personal growth and learning new perspectives
                    </BodyText>
                  </ListItem>
                  <ListItem>
                    <BodyText>
                      Networking and building professional relationships
                    </BodyText>
                  </ListItem>
                </UnorderedList>
              </VStack>

              <VStack alignItems='start' flex='1'>
                <SideHeading style={{ color: 'white' }}>
                  High-Level Goals
                </SideHeading>
                <UnorderedList>
                  <ListItem>
                    <BodyText>
                      Learning from others
                    </BodyText>
                  </ListItem>
                  <ListItem>
                    <BodyText>
                      Self-discovery
                    </BodyText>
                  </ListItem>
                  <ListItem>
                    <BodyText>
                      Collaboration
                    </BodyText>
                  </ListItem>
                </UnorderedList>
              </VStack>
            </HStack>
          </SCard>

          <VStack flex='1'>
            <CTACard>
              <SideHeading style={{ color: 'white' }}>
                Before Event Promotion CTA
              </SideHeading>
            </CTACard>
            <CTACard>
              <SideHeading style={{ color: 'white' }}>
                After Event Promotion CTA
              </SideHeading>
            </CTACard>
            <CTACard>
              <SideHeading style={{ color: 'white' }}>
                After Event CTA
              </SideHeading>
            </CTACard>
          </VStack>
        </HStack>

        <Spacer height='200px' />
      </Box>
    </Box>
  );
};

export default TedxUW;
