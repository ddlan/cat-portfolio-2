import React, { type FC } from 'react';
import { Box, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import '../styles/styles.css';
import '../styles/styleguide.css';
import cat from '../images/Cat.png';
import resume from '../res/catherine-hoang.pdf';

interface TToggleBoxProps {
  name: string
  isSelected: boolean
}

const ToggleBox: FC<TToggleBoxProps> = ({ name, isSelected }) => {
  return (
    isSelected
      ? (
          <Link to={name === 'Work' ? '/' : '/about'}>
            <Box className='nav-border'>
              <Text className='nav' fontWeight='700'>
                {name}
              </Text>
            </Box>
          </Link>
        )
      : (
          <Link to={name === 'Work' ? '/' : '/about'}>
            <Box className='non-nav-border'>
              <Text className='non-nav'>
                {name}
              </Text>
            </Box>
          </Link>
        )
  );
};

interface TNavbarProps {
  isWork: boolean
}

const Navbar: FC<TNavbarProps> = ({ isWork }) => {
  return (
    <HStack justify='space-between' h='98px' mx='100px'>
      <Link to="/">
        <HStack style={{ cursor: 'pointer' }}>
          <Image src={cat} alt='Cat icon' boxSize="32px"/>
          <Text>CAT HOANG</Text>
        </HStack>
      </Link>

      <HStack>
        <ToggleBox
          name='Work' isSelected={isWork}
        />
        <ToggleBox
          name='About' isSelected={!isWork}
        />
     </HStack>

    <ChakraLink href={resume}>↪ Resumé</ChakraLink>
    </HStack>
  );
};

export default Navbar;
