import React, { type FC } from 'react';
import { VStack, Image, Text, Box, HStack, Icon } from '@chakra-ui/react';

import computer from '../images/new/computer.svg';
import adobeLogo from '../images/new/adobe-logo.svg';
import microsoftLogo from '../images/new/microsoft-logo.svg';
import tedxLogo from '../images/new/tedx-logo.svg';
import collabLogo from '../images/new/collab-logo.svg';
import scribble from '../images/new/scribble.svg';

import briefcase from '../images/new/briefcase.svg';
import lightbulb from '../images/new/lightbulb.svg';
import avatar from '../images/new/avatar.svg';
import document from '../images/new/document.svg';
import bag from '../images/new/bag.svg';

import '../styles/styles.css';
import CaseStudyCard from '../components/cards/CaseStudyCard';
import SideProjectCard from '../components/cards/SideProjectCard';
import { SCard } from '../styles/components';
import AboutSection from '../components/about/AboutSection';
import SideNav from '../components/shared/SideNav';

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
      <SideNav
        items={[
          {
            content: <Image src={briefcase} />,
            label: 'Work',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={lightbulb} />,
            label: 'Side projects',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={avatar} />,
            label: 'About',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={document} />,
            label: 'Resume',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={bag} color='#8c8c8c' />,
            label: 'Design Studio',
            showTooltip: true,
            onClick: () => {}
          }
        ]}
      />

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
        <AboutSection />
      </VStack>

      <Box h='150px' w='100%' />
    </VStack>
  );
};

export default Homepage;
