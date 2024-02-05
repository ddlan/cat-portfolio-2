import React, { type FC } from 'react';
import {
  Box, Heading, HStack,
  Text, VStack
} from '@chakra-ui/react';

import {
  Title, SideHeading,
  BodyText
} from '../../styles/components';
import '../../styles/styles.css';

interface TIntroProps {
  title: string
  subtitle: string
  sideSections: Array<{ title: string, items: string[] }>
  body: JSX.Element
  buttons: JSX.Element[]
}

const Intro: FC<TIntroProps> = ({ title, subtitle, sideSections, body, buttons }) => {
  return (
    <>
      <Title>
        {title}
      </Title>
      <Heading size="ml" color='#fff6'>{subtitle}</Heading>
      <HStack alignItems='start'>
        <VStack alignItems='start' gap='0.25rem' flex='1'>
          {sideSections.map(section => (
            <Box key={section.title}>
              <SideHeading mt='32px'>{section.title}</SideHeading>
              {section.items.map(item => (
                <Text key={item}>{item}</Text>
              ))}
            </Box>
          ))}
        </VStack>
        <VStack alignItems='start' gap='0.25rem' flex='3' mt='32px'>
          <BodyText>{body}</BodyText>
          <HStack>
            {buttons}
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default Intro;
