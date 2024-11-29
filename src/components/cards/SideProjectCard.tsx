import React, { type FC } from 'react';
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
  const card = (
      <SCard className='hover-card' w='100%'>
        <HStack justify='space-between'>
          <HStack gap='20px'>
            <VStack align='start' gap='0'>
              <Heading color='black' fontWeight='400' fontSize='26px'>{title}</Heading>
              <Text>{subtitle}</Text>
            </VStack>
          </HStack>
          {link !== undefined && (
            <LinkButton href={link} image={linkImage} />
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
