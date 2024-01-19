import { Box, Image } from '@chakra-ui/react';
import '../styles.css';
import cat from '../images/Cat.png';

const Navbar = () => {
  return (
    <Box>
      <Image src={cat} alt='Cat icon' />
    </Box>
  );
}

export default Navbar;
