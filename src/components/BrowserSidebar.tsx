import React, { type FC } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../styles/styles.css';
import styled from 'styled-components';

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
  return (
    <Box w='225px' h='100%'>
      <HStack p='6px' mt='4px'>
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
    </Box>
  );
};

export default BrowserSidebar;
