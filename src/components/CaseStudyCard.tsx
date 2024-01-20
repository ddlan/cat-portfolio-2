import React, { type FC } from 'react';
import '../styles/styles.css';
import { StyledCard } from '../styles/components';

interface TProps {
  name: string
};

const CaseStudyCard: FC<TProps> = ({ name }) => {
  return (
    <StyledCard
      w='100%'
      h='100%'
      textAlign='center'
      justify='center'
    >
      {name}
    </StyledCard>
  );
};

export default CaseStudyCard;
