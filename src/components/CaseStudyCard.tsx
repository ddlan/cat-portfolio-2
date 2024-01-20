import React, { type FC } from 'react';
import '../styles/styles.css';
import { SCard } from '../styles/components';

interface TProps {
  name: string
};

const CaseStudyCard: FC<TProps> = ({ name }) => {
  return (
    <SCard
      w='100%'
      h='100%'
      textAlign='center'
      justify='center'
    >
      {name}
    </SCard>
  );
};

export default CaseStudyCard;
