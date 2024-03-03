import React, { useState, type FC } from 'react';
import { HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react';

import changeWorld from '../../images/change-world.png';

import '../../styles/styles.css';
import { SGridCard, SideHeading } from '../../styles/components';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const SIconButton = styled(IconButton).attrs({
  isRound: true,
  w: '16px',
  minW: '16px',
  h: '16px'

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
                <SideHeading style={{ color: '#fff' }}>Who is Catherine (Cat)?</SideHeading>
                <Text fontSize='12px'>
                  {/* eslint-disable-next-line max-len */}
                  She is a Vietnamese-Canadian that fell in love with building communities and all things creative. She began tinkering on projects to light joy in others, and is often excited.
                  <br /><br />
                  Strength: Sparking intellectual surprise through her designs.
                  <br /><br />
                  Check out how Cat thinks 💭, grows 🌱,️ works 👷🏻‍, and loves 💜.
                </Text>
              </VStack>
              )
            : (
              <Image src={changeWorld} maxW='85%' m='-12px' />
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
