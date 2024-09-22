import React, { useState, type FC } from 'react';
import {
  HStack, Heading, Image, Link,
  Switch,
  Text, VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import cat from '../../images/sidebar-cat.png';
import happyCat from '../../images/sidebar-happy-cat.png';
import lock from '../../images/lock.svg';
import folder from '../../images/folder.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import email from '../../images/email.svg';
import click from '../../res/audio/Button Click.wav';

import { SDivider } from '../../styles/components';
import '../../styles/styles.css';
import { LINKEDIN, TWITTER } from '../../constants';
import useSound from 'use-sound';

const SFadingCircle = styled(motion.div)`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  border: 1px solid #404040;
  background-color: #404040;
`;

const SFooterCircle = styled(Link)`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  background-color: #6b6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TFadingCircleProps {
  activeBgColor: string
  activeBorderColor: string
}

const FadingCircle: FC<TFadingCircleProps> = ({
  activeBgColor,
  activeBorderColor
}) => (
  <SFadingCircle
    whileHover={{
      backgroundColor: activeBgColor,
      borderColor: activeBorderColor,
      transition: {
        ease: [0, 0.4, 0.2, 1],
        duration: 1
      }
    }}
  />
);

interface TProps {
  isWork: boolean
}

const BrowserSidebar: FC<TProps> = ({ isWork }) => {
  const [catIsHovered, setCatIsHovered] = useState(false);
  const [play] = useSound(click as string, { volume: 0.5 });

  const toggleSection = isWork
    ? {
        title: 'Lover of:',
        bullets: ['Storytelling', 'Hidden Easter Eggs ;))', 'Multi-purpose products']
      }
    : {
        title: 'Abilities:',
        bullets: ['Data Storytelling', 'High-Agency', 'Community Builder']
      };

  return (
    <VStack maxW='250px' minW='205px' h='100%' pr='6px'>
      <HStack p='6px' mt='4px' width='100%'>
        <FadingCircle
          activeBgColor='#FF5F57'
          activeBorderColor='#B9302C'
        />
        <FadingCircle
          activeBgColor='#FFBC2E'
          activeBorderColor='#CB8917'
        />
        <FadingCircle
          activeBgColor='#28CA42'
          activeBorderColor='#169621'
        />
       </HStack>
       <HStack className='cat-box formerly-box'>
          <Image src={lock} />
          <Text className='formerly'>Formerly Microsoft and Adobe</Text>

        </HStack>
        <motion.div
          className='cat-box'
          onHoverStart={() => { setCatIsHovered(true); }}
          onHoverEnd={() => { setCatIsHovered(false); }}
        >
          <Image className='cat-in-box' src={catIsHovered ? happyCat : cat} />
        </motion.div>
        <SDivider/>
        <HStack alignItems='start' width='100%'>
          <Image src={folder} alt='folder icon' height='20px'/>
          <Heading as='h2' size='sm' color='#ffffffc0' style={{ lineHeight: 'normal' }}>
            {toggleSection.title}
          </Heading>
        </HStack>
        <VStack alignItems='start' w='100%' ml='8px'>
          {toggleSection.bullets.map(item => (
            <HStack key={item} mt='8px' height='24px'>
              <div>
                <Switch
                  colorScheme='black'
                  defaultChecked
                  border='1px solid #656565'
                  borderRadius='full'
                  onChange={() => { play(); }}
                />
              </div>
              <Text color='#747474' fontSize='14px' lineHeight='16px'>{item}</Text>
            </HStack>
          ))}
        </VStack>
        <SDivider/>

        <HStack alignItems='start' width='100%'>
          <Image src={folder} alt='folder icon' height='20px'/>
          <Heading as='h2' size='sm' color='#ffffffc0' style={{ lineHeight: 'normal' }}>
            Product Designer
          </Heading>
        </HStack>

        {/* Footer */}
        <HStack marginTop='auto' marginBottom='8px'>
          <SFooterCircle href={LINKEDIN} target='_blank'>
            <Image src={linkedin} alt='Linkedin icon'/>
          </SFooterCircle>
          <SFooterCircle href={TWITTER} target='_blank'>
            <Image src={twitter} alt='Twitter icon'/>
          </SFooterCircle>
          <SFooterCircle href="mailto:catherinehoang44@gmail.com" target='_blank'>
            <Image src={email} alt='Email icon'/>
          </SFooterCircle>
        </HStack>
    </VStack>
  );
};

export default BrowserSidebar;
