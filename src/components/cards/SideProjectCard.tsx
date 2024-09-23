import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';

import linkImage from '../../images/new/link.svg';
import '../../styles/styles.css';
import { SCard } from '../../styles/components';

interface TProps {
  title: string
  subtitle: string
  link?: string
};

const SideProjectCard: FC<TProps> = ({ title, subtitle, link }) => {
  return (
      <SCard w='100%'>
        <HStack justify='space-between'>
          <HStack gap='20px'>
            <VStack align='start' gap='0'>
              <Heading color='black' fontWeight='400' fontSize='26px'>{title}</Heading>
              <Text>{subtitle}</Text>
            </VStack>
          </HStack>
          {link !== undefined && (
            <Button as={Link} to={link} h='38px' w='38px' borderRadius='100px'
              background='transparent' border='1px solid #f2f2f2' padding='0'
              >
              <Image src={linkImage} />
            </Button>
          )}
        </HStack>
      </SCard>
  );
};

export default SideProjectCard;
