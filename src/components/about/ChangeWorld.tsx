import React, { useState, type FC } from 'react';
import { HStack, IconButton, Image, Link, Text, VStack } from '@chakra-ui/react';

import changeWorld from '../../images/change-world.png';

import '../../styles/styles.css';
import { SGridCard } from '../../styles/components';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const SIconButton = styled(IconButton).attrs({
  isRound: true,
  w: '24px',
  minW: '24px',
  h: '24px'

})`
  border-radius: 100%;
  border: 0.5px solid #484848;
  background: #252525;
  /* Offset for SSard caption */
  margin-top: 40px;
}`;

const ChangeWorld: FC = () => {
  const [isTextMode, setIsTextMode] = useState(true);

  return (
    <SGridCard>
      <VStack justifyContent='space-between' h='100%' alignItems='end' px='8px'>
        <HStack h='100%' justifyContent='space-between'>
          <SIconButton
            aria-label="See previous section"
            onClick={() => { setIsTextMode(prev => !prev); }}
            icon={<ChevronLeftIcon color='#7B7B7B'/>}
          />
          {isTextMode
            ? (
              <VStack alignItems='center' w='100%' p='12px 8px 0px 8px' gap='12px'>
                <Text fontSize='16px'>
                  {/* eslint-disable-next-line max-len */}
                  A Toronto-based designer who fell in love with tinkering on projects and dabbling in all things creative to light joy in others.
                  <br /><br />
                  She is often excited and makes it a mission to spark intellectual surprise through her designs.
                  <br /><br />
                  Check out how Cat&nbsp;
                  <Link href='https://catherinehoang.substack.com/'>thinks 💭</Link>,&nbsp;
                  <Link href='https://whoiscat.framer.website/'>grows 🌱</Link>,&nbsp;
                  <Link href='https://game-of-life.framer.website/'>works 👷🏻</Link> ,&nbsp;
                  <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> and loves 💜</Link>.
                </Text>
              </VStack>
              )
            : (
              <Image src={changeWorld} maxW='80%' m='-16px' mb='-28px' />
              )
          }
           <SIconButton
            aria-label="See next section"
            onClick={() => { setIsTextMode(prev => !prev); }}
            icon={<ChevronRightIcon color='#7B7B7B'/>}
          />
        </HStack>
        <Text className='scard-caption'>How I Change The World</Text>
      </VStack>
    </SGridCard>
  );
};

export default ChangeWorld;
