import React, { type FC } from 'react';
import { Card, VStack, Image } from '@chakra-ui/react';

import computer from '../images/new/computer.svg';
import adobeLogo from '../images/new/adobe-logo.svg';
import microsoftLogo from '../images/new/microsoft-logo.svg';
import tedxLogo from '../images/new/tedx-logo.svg';
import collabLogo from '../images/new/collab-logo.svg';

import '../styles/styles.css';
import CaseStudyCard from '../components/cards/CaseStudyCard';

const caseStudies = [
  {
    title: 'Learning Platform',
    subtitle: '+500% new users',
    image: adobeLogo,
    tags: ['Product Design,', 'Accessibility']
  },
  {
    title: 'Minecraft Go-to-Market',
    subtitle: '100% YoY growth',
    image: microsoftLogo,
    tags: ['Product Strategy', 'Marketing']
  },
  {
    title: 'Site Design',
    subtitle: '150% sign-up KPIs',
    image: tedxLogo,
    tags: ['UX Design,', 'Visual Design']
  },
  {
    title: 'Collaborations',
    subtitle: '12 collaborations, 12 weeks',
    image: collabLogo,
    tags: ['Motion Design,', 'UX Research']
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
        justifyContent='space-between'
      >
        <Card>Work</Card>
        {caseStudies.map(({ title, subtitle, image, tags }) => <CaseStudyCard
          key={title}
          title={title}
          subtitle={subtitle}
          image={image}
          tags={tags}
        />)}
      </VStack>
    </VStack>
  );
};

export default Homepage;
