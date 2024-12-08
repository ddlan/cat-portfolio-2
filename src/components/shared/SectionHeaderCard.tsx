import React, { type FC } from 'react';
import '../../styles/styles.css';
import { SCard } from '../../styles/components';
import { Text } from '@chakra-ui/react';

interface TProps {
  title: string
  ref: React.RefObject<HTMLDivElement>
}

const SectionHeaderCard: FC<TProps> = ({
  title,
  ref
}) => {
  return (
    <SCard p='12px 16px' ref={ref}><Text>{title}</Text></SCard>
  );
};

export default SectionHeaderCard;
