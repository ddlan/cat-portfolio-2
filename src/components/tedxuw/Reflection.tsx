import React, { type FC } from 'react';
import {
  Box, VStack
} from '@chakra-ui/react';

import {
  SCard, BodyText,
  SectionHeading, SideHeading
} from '../../styles/components';
import '../../styles/styles.css';
import SectionTitle from '../shared/SectionTitle';

interface TLessonCardProps {
  title: string
  body: string
}

const LessonCard: FC<TLessonCardProps> = ({ title, body }) => (
  <SCard p='20px'>
    <SideHeading style={{ color: '#fff' }}>{title}</SideHeading>
    <BodyText style={{ color: '#ffffffbf' }}>{body}</BodyText>
  </SCard>
);

const Reflection: FC = () => {
  return (
    <Box alignItems='start'>
      <SectionTitle title='Reflection and Takeaways' />

      <BodyText my='32px'>
        {/* eslint-disable-next-line max-len */}
        This was fun from start to finish! Combining visual design with UX/UI was challenging, and there are many things I wish I could have done differently, but it was a fun learning experience overall.
      </BodyText>

      <SectionHeading my='24px'>
        Lessons
      </SectionHeading>

      <VStack gap='12px' mt='16px'>
        <LessonCard
          title='🌀 Careful of Clutter'
          // eslint-disable-next-line max-len
          body='Visual design does give a website a ‘wow’ factor, but it may be easy to forget the primary goal of the design based on our user research; navigation. Planning how to balance visual and UX design in the low-fidelity would be critical in improving the final outcome.'
        />
        <LessonCard
          title='🆕 Unbias User Validation'
          // eslint-disable-next-line max-len
          body='Most of our research was conducted internally, where the team consisted of students with their own side-projects. Even if many of us match the persona, our existing knowledge of the event results in bias in our UXR.'
        />
        <LessonCard
          title='🧘 Mindful of the Goal'
          // eslint-disable-next-line max-len
          body='Good designs are backed by research and a clear purpose behind what is designed. Using data to convey and advocate for design decisions would help make collaborative conversations much smoother.'
        />
      </VStack>
    </Box>
  );
};

export default Reflection;
