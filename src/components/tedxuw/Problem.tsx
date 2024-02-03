import React, { type FC } from 'react';
import {
  HStack,
  Image, ListItem,
  UnorderedList, VStack
} from '@chakra-ui/react';

import bulletImg from '../../images/bullet.svg';
import folder from '../../images/folder.svg';
import jordan from '../../images/jordan.png';
import {
  SCard, SDivider, SideHeading, BodyText,
  Pink, SectionHeading, Title, CTACard
} from '../../styles/components';
import '../../styles/styles.css';

interface TBodyCardProps {
  title: string
  bullets: string[]
  flex: string
};

const BodyCard: FC<TBodyCardProps> = ({ title, bullets, flex }) => {
  return (
    <VStack alignItems='start' flex={flex}>
      <SideHeading style={{ color: 'white' }}>
        {title}
      </SideHeading>
      {bullets.map(bullet => (
        <HStack key={bullet} h='3.5rem' gap='12px'>
          <Image src={bulletImg} />
          <BodyText>{bullet}</BodyText>
        </HStack>
      ))}
    </VStack>
  );
};

interface TSmallCardProps {
  title: string
  pinkTitle: string
  emoji: string
  bullets: string[]
};

const SmallCard: FC<TSmallCardProps> = ({
  title, pinkTitle, emoji, bullets
}) => {
  return (
    <CTACard flex='1' height='100%'>
      <SideHeading style={{ color: 'white' }}>
        {title}: <Pink>{pinkTitle}</Pink> {emoji}
      </SideHeading>
      <UnorderedList>
        {bullets.map(bullet => (
          <ListItem key={bullet}>
            <BodyText>{bullet}</BodyText>
          </ListItem>
        ))}
      </UnorderedList>
    </CTACard>
  );
};

const Problem: FC = () => {
  return (
    <>
      <HStack mb='20px' alignItems='center' gap='12px'>
        <Image src={folder} width='36px' mb='10px' />
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
            <br />
            <br />
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

      <HStack mt='24px' alignItems='stretch'>
        <SCard p='24px' flex='2' alignItems='center'>
          <HStack>
            <Image src={jordan} width='150px' borderRadius='8px' />
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
            style={{ marginTop: '30px', marginBottom: '24px', width: '90%' }}
          />
          <HStack alignItems='start' gap='12px'>
            <BodyCard title='Job to be done' bullets={[
              'Gaining insight and inspiration for career / personal paths',
              'Personal growth and learning new perspectives',
              'Networking and building professional relationships'
            ]} flex='3'/>
            <BodyCard title='High-Level Goals' bullets={[
              'Learning from others',
              'Self-discovery',
              'Collaboration'
            ]} flex='2'/>
          </HStack>
        </SCard>

        <VStack flex='1'>
          <SmallCard
            title='Before Event Promotion CTA'
            pinkTitle='Sponsor us'
            emoji='💰'
            bullets={[
              'SMEs',
              'Purchasing power',
              'Waterloo ecosystem'
            ]}
          />
          <SmallCard
            title='After Event Promotion CTA'
            pinkTitle='Event sign-up'
            emoji='📈'
            bullets={[
              'Students, entrepreneurs',
              'Educational institutes',
              'NGO collaborations'
            ]}
          />
          <SmallCard
            title='After Event CTA'
            pinkTitle='Future event notifications'
            emoji='🔔'
            bullets={[
              'Attendance interest',
              'Pipeline for organizers and potential sponsors'
            ]}
          />
        </VStack>
      </HStack>

      <SectionHeading>
        This helped us refine our design process to consider:
      </SectionHeading>
    </>
  );
};

export default Problem;
