import React, { type FC } from 'react';
import '../../styles/styles.css';
import Intro from '../shared/Intro';
import { Button } from '@chakra-ui/react';
import { Purple } from '../../styles/components';

interface TProps {
  scrollToCaseStudy: () => void
}

const TechNovaIntro: FC<TProps> = ({ scrollToCaseStudy }) => {
  return (
    <Intro
      title='TechNova: Women+ Hackathon Website'
      subtitle='Visual and Web Design'
      sideSections={[
        {
          title: 'MY ROLE',
          items: ['Web Designer', 'Visual Designer']
        },
        {
          title: 'TEAM',
          items: ['3 Web Designers', '4 Developers', 'VP Design']
        },
        {
          title: 'TOOLS',
          items: ['Figma', 'Figjam']
        },
        {
          title: 'TIMELINE',
          items: ['2 months']
        }
      ]}
      body={
        <>
          {/* eslint-disable-next-line max-len */}
          TechNova is University of Waterloo’s Women+ in Tech Hackathon. TechNova’s mission is to create safe, inclusive and empowering spaces for women and non-binary individuals to start, grow and thrive in the technology industry.
          <br/><br/>
          {/* eslint-disable-next-line max-len */}
          With that in mind, we wanted to create a site and designs that empower women+ in tech, following a galaxy theme to tell individuals to <Purple>reach for the stars</Purple>!
          <br/><br/>
        </>
      }
      buttons={[
        <Button key='a' onClick={scrollToCaseStudy}>View WIP Case Study ↓</Button>
      ]}
    />
  );
};

export default TechNovaIntro;
