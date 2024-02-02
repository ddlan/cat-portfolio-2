import React, { type ReactNode, type FC } from 'react';
import '../../styles/styles.css';
import { SCard } from '../../styles/components';
import TedxUWCard from './TedxUWCard';
import AdobeCard from './AdobeCard';
import ChallengeCard from './ChallengeCard';
import TechNovaCard from './TechNovaCard';

interface TProps {
  name: string
};

const CaseStudyCard: FC<TProps> = ({ name }) => {
  const renderBody = (): ReactNode => {
    switch (name) {
      case 'TedxUW': return <TedxUWCard />;
      case 'Adobe': return <AdobeCard />;
      case 'Challenge': return <ChallengeCard />;
      case 'TechNova': return <TechNovaCard />;
      default: return null;
    }
  };

  return (
    <SCard
      w='100%'
      h='100%'
      textAlign='center'
      justify='center'
    >
      {renderBody()}
    </SCard>
  );
};

export default CaseStudyCard;
