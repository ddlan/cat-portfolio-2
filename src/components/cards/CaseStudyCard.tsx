import React, { type ReactNode, type FC } from 'react';
import '../../styles/styles.css';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { SCard, SHeading } from '../../styles/components';
import { Link } from 'react-router-dom';

interface TProps {
  title: string
  subtitle: string
  image: ReactNode
  tags: string[]
  link: string
};

const CaseStudyCard: FC<TProps> = ({ title, subtitle, image, tags, link }) => {
  return (
    <Link to={link} style={{ width: '100%' }}>
      <SCard w='100%'>
        <HStack justify='space-between'>
          <HStack gap='20px'>
            <SCard p='auto' h='67px' w='67px' justify='space-around'>
              {image}
            </SCard>
            <VStack align='start' gap='0'>
              <SHeading>{title}</SHeading>
              <Text>{subtitle}</Text>
            </VStack>
          </HStack>
          <HStack gap='6px'>
            {tags.map((tag) => (
              <SCard key={tag} p='5px 13px 5px 13px' background='rgb(250, 250, 250)'><Text>{tag}</Text></SCard>
            ))}
          </HStack>
        </HStack>
      </SCard>
    </Link>
  );
};

export default CaseStudyCard;
