import React, { type FC } from 'react';
import '../../styles/styles.css';
import { Card, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';

interface TProps {
  title: string
  subtitle: string
  image: string
  tags: string[]
};

const CaseStudyCard: FC<TProps> = ({ title, subtitle, image, tags }) => {
  return (
    <Card>
      <HStack>
        <Image src={image}/>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{subtitle}</Text>
        </VStack>
      </HStack>
      <HStack>
        {tags.map((tag) => (
          <Text key={tag}>{tag}</Text>
        ))}
        </HStack>
    </Card>
  );
};

export default CaseStudyCard;
