import React, { type FC } from 'react';
import { Box, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import '../styles/styles.css';
import '../styles/styleguide.css';
import cat from '../images/Cat.png';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <HStack justify='space-between' h='98px' mx='100px'>
      <Link to="/">
        <HStack style={{ cursor: 'pointer' }}>
          <Image src={cat} alt='Cat icon' boxSize="32px"/>
          <Text>CAT HOANG</Text>
        </HStack>
      </Link>

      <Box className="nav">
        <Box className="element">
          <Box className="text-wrapper">Work</Box>
        </Box>
        <Box className="div-wrapper">
          <Box className="text-wrapper">About</Box>
        </Box>
     </Box>

    <ChakraLink >↪ Resume</ChakraLink>
    </HStack>
  );
};

export default Navbar;
