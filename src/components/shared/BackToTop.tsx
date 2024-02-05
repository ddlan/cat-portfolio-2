import React, { type FC } from 'react';
import {
  Button
} from '@chakra-ui/react';
import '../../styles/styles.css';

const BackToTop: FC = () => {
  return (
    <Button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
    Back to Top ↑
    </Button>
  );
};

export default BackToTop;
