import React, { type FC } from 'react';
import { HStack, Link, Text, VStack } from '@chakra-ui/react';
import styled from 'styled-components';

import '../../styles/styles.css';
import { SCard, SHeading } from '../../styles/components';
import twitter from '../../images/new/twitter.svg';
import email from '../../images/new/email.svg';

import CustomTag from '../shared/CustomTag';
import LinkButton from '../shared/LinkButton';

const SUnderlinedText = styled(Text)`
  text-decoration: underline;
  display: inline;
`;

const IntroCard: FC = () => {
  return (
    <SCard p='20px 12px 20px 12px'>
      <VStack align='start' gap='20px'>
        <SHeading color='black' fontWeight='400' fontSize='26px'>Cat Hoang</SHeading>
        <Text>
          {/* eslint-disable-next-line max-len */}
          A Toronto-based designer who fell in love with tinkering on projects and dabbling in all things creative to light joy in others.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          She is often excited and makes it a mission to spark intellectual surprise through her designs.
          <br /><br />
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
  );
};

export default IntroCard;
