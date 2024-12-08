import React, { type FC } from 'react';
import '../../styles/styles.css';
import { SCard } from '../../styles/components';
import { Text } from '@chakra-ui/react';

interface TProps {
  title: string
  scrollRef: React.RefObject<HTMLDivElement>
}

const SectionHeaderCard: FC<TProps> = ({
  title,
  scrollRef
}) => {
  return (
    <SCard p='12px 16px' ref={scrollRef}><Text>{title}</Text></SCard>
  );
};

export default SectionHeaderCard;
