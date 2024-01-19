import { Box, Image, Text } from '@chakra-ui/react';
import '../styles.css';
import cat from '../images/Cat.png';

const Navbar = () => {
  return (
    <Box>
      <Image src={cat} alt='Cat icon' />
      <Text>Hello</Text>
    </Box>
  );
}

export default Navbar;
