import React, { type FC } from 'react';
import '../../styles/styles.css';
import LoudButton from './LoudButton';

const BackToTop: FC = () => {
  return (
    <LoudButton onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
    Back to Top ↑
    </LoudButton>
  );
};

export default BackToTop;
