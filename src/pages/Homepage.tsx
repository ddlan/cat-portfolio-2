import React, { type FC } from 'react';
import { VStack, Image, Text, Box, HStack, Grid, GridItem, Link } from '@chakra-ui/react';

import computer from '../images/new/computer.svg';
import adobeLogo from '../images/new/adobe-logo.svg';
import microsoftLogo from '../images/new/microsoft-logo.svg';
import tedxLogo from '../images/new/tedx-logo.svg';
import collabLogo from '../images/new/collab-logo.svg';
import scribble from '../images/new/scribble.svg';
import twitter from '../images/new/twitter.svg';
import email from '../images/new/email.svg';

import '../styles/styles.css';
import CaseStudyCard from '../components/cards/CaseStudyCard';
import SideProjectCard from '../components/cards/SideProjectCard';
import { SCard, SHeading } from '../styles/components';
import styled from 'styled-components';
import CustomTag from '../components/shared/CustomTag';
import LinkButton from '../components/shared/LinkButton';

const SUnderlinedText = styled(Text)`
  text-decoration: underline;
  display: inline;
`;

const caseStudies = [
  {
    title: 'Learning Platform',
    subtitle: '+500% new users',
    image: <Image src={adobeLogo} p='20px'/>,
    tags: ['Product Design', 'Accessibility'],
    link: 'adobe'
  },
  {
    title: 'Minecraft Go-to-Market',
    subtitle: '100% YoY growth',
    image: <Image src={microsoftLogo} p='10px'/>,
    tags: ['Product Strategy', 'Marketing'],
    link: '/'
  },
  {
    title: 'Site Design',
    subtitle: '150% sign-up KPIs',
    image: <Image src={tedxLogo} p='12px'/>,
    tags: ['UX Design', 'Visual Design'],
    link: 'tedxuw'
  },
  {
    title: 'Collaborations',
    subtitle: '12 collaborations, 12 weeks',
    image: <Image src={collabLogo} p='22px'/>,
    tags: ['Motion Design', 'UX Research'],
    link: 'collabs'
  }
];

const sideProjects = [
  {
    title: 'Personal Blog',
    subtitle: 'A place to dump my learnings.',
    link: 'https://catherinehoang.substack.com'
  },
  {
    title: 'Motion Design',
    subtitle: 'To complement my product designs.'
  },
  {
    title: 'Hardware and 3D',
    subtitle: 'Making little self-indulgent robots.'
  },
  {
    title: 'Crocheting',
    subtitle: 'A creative way for me to destress.'
  }
];

const Homepage: FC = () => {
  return (
    <VStack h='100%'
      w='630px'
      my='100px'
      mx='auto'
>
      <Image src={computer} w='100%'/>

      <VStack
        w='100%'
        align='start'
        justifyContent='space-between'
        gap='20px'
      >
        <SCard p='12px 16px 12px 16px'><Text>Work</Text></SCard>
        {caseStudies.map(({ title, subtitle, image, tags, link }) => <CaseStudyCard
          key={title}
          title={title}
          subtitle={subtitle}
          image={image}
          tags={tags}
          link={link}
        />)}
      </VStack>

      <Box h='150px' w='100%' />

      <VStack
        w='100%'
        align='start'
        justifyContent='space-between'
        gap='20px'
      >
        <SCard p='12px 16px 12px 16px'><Text>Side Projects</Text></SCard>
        <HStack gap='0' justify='start' w='100%'>
          <VStack
            h='378px'
            w='100%'
            align='start'
            justifyContent='space-between'
            gap='20px'
            flex='1 1 0px'
          >
            {sideProjects.map(({ title, subtitle, link }) => <SideProjectCard
              key={title}
              title={title}
              subtitle={subtitle}
              link={link}
            />)}
          </VStack>
          <SCard flex='1 1 0px' ml='12px'>
            <Image src={scribble} />
          </SCard>
        </HStack>
      </VStack>

      <Box h='150px' w='100%' />

      <VStack
        w='100%'
        align='start'
        justifyContent='space-between'
        gap='20px'
      >
        <SCard p='12px 16px 12px 16px'><Text>About</Text></SCard>
        <Grid templateColumns='repeat(2, 1fr)'>
          <GridItem w='100%'>
            <SCard p='20px 12px 20px 12px'>
              <VStack align='start' gap='20px'>
                <SHeading color='black' fontWeight='400' fontSize='26px'>Cat Hoang</SHeading>
                <Text>
                  {/* eslint-disable-next-line max-len */}
                  A Toronto-based designer who fell in love with tinkering on projects and dabbling in all things creative to light joy in others.
                  <br /><br/>
                  She is often excited and makes it a mission to spark intellectual surprise through her designs.
                  <br /><br/>
                  Check out how Cat&nbsp;
                  <Link href='https://catherinehoang.substack.com/'>
                    <SUnderlinedText>thinks</SUnderlinedText> 💭
                  </Link>,&nbsp;
                  <Link href='https://whoiscat.framer.website/'>
                    <SUnderlinedText>grows</SUnderlinedText> 🌱
                  </Link>,&nbsp;
                  <Link href='https://game-of-life.framer.website/'>
                    <SUnderlinedText>works</SUnderlinedText> 👷🏻
                  </Link> , and&nbsp;
                  <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                    <SUnderlinedText>loves</SUnderlinedText> 💜
                  </Link>.
                </Text>
                <HStack justify='space-between' w='100%'>
                  <CustomTag tag='Product Designer' />
                  <HStack>
                    <LinkButton href='https://twitter.com/CatHoang_' image={twitter} />
                    <LinkButton href='mailto:catherinehoang44@gmail.com' image={email} />
                  </HStack>
                </HStack>
              </VStack>
            </SCard>
          </GridItem>
        </Grid>
      </VStack>

      <Box h='150px' w='100%' />
    </VStack>
  );
};

export default Homepage;
