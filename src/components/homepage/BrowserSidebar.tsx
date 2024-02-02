import React, { useState, type FC } from 'react';
import {
  Divider, HStack, Heading, Image, ListItem,
  Text, UnorderedList, VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import cat from '../../images/sidebar-cat.png';
import happyCat from '../../images/sidebar-happy-cat.png';
import lock from '../../images/lock.svg';
import '../../styles/styles.css';

const SFadingCircle = styled(motion.div)`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  border: 1px solid #404040;
  background-color: #404040;
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

const BrowserSidebar: FC = () => {
  const [catIsHovered, setCatIsHovered] = useState(false);

  return (
    <VStack w='250px' h='100%' pr='6px'>
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
        <Divider width='80%' borderBottomWidth='2px' my='16px'/>
        <Heading as='h2' size='sm' color='#ffffffc0'>Lover of</Heading>
        <UnorderedList>
          <ListItem color='#ffffffc0'>Storytelling</ListItem>
          <ListItem color='#ffffffc0'>Hidden Easter Eggs ;))</ListItem>
          <ListItem color='#ffffffc0'>Multi-purpose products</ListItem>
        </UnorderedList>
        <Divider width='80%' borderBottomWidth='2px' my='16px'/>
    </VStack>
  );
};

export default BrowserSidebar;
