import React, { useState, type FC } from 'react';
import { Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';

import linkImage from '../../images/new/link.svg';
import '../../styles/styles.css';
import { SCard } from '../../styles/components';
import LinkButton from '../shared/LinkButton';

interface TProps {
  title: string
  subtitle: string
  link?: string
};

const SideProjectCard: FC<TProps> = ({ title, subtitle, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const card = (
      <SCard
        className={link !== undefined ? 'hover-card' : ''}
        w='100%'
        onMouseOver={() => { setIsHovered(true); }}
        onMouseOut={() => { setIsHovered(false); }}
      >
        <HStack justify='space-between'>
          <HStack gap='20px'>
            <VStack align='start' gap='0'>
              <Heading color='black' fontWeight='400' fontSize='26px'>{title}</Heading>
              <Text>{subtitle}</Text>
            </VStack>
          </HStack>
          {link !== undefined && isHovered && (
            <LinkButton href={link} image={linkImage} style={{ pointerEvents: 'none' }} />
          )}
        </HStack>
      </SCard>
  );

  if (link === undefined) return card;

  return (
    <Link href={link} w='100%' style={{ textDecoration: 'none' }}>
      {card}
    </Link>
  );
};

export default SideProjectCard;
