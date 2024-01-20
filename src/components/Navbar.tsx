import { HStack, Image, Text } from '@chakra-ui/react';
import '../styles.css';
import '../styleguide.css';
import cat from '../images/Cat.png';

const Navbar = () => {
  return (
    <HStack justify='space-between' height='98px' width='100%'>
      <Image src={cat} alt='Cat icon' boxSize="32px"/>
      <Text>CAT HOANG</Text>

      <div className="nav">
      <div className="element">
        <div className="text-wrapper">Work</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper">About</div>
      </div>
    </div>

    <a>Resume</a>
    </HStack>
  );
}

export default Navbar;
