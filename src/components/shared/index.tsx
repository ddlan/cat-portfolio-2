import { Heading } from '@chakra-ui/react';
import React, { type FC } from 'react';

interface TProps {
  children: React.ReactNode
}

export const AdobeHeading: FC<TProps> = ({ children }) => {
  return (
    <Heading as='h2' color='black' fontSize='26px' fontWeight='400' lineHeight='1'>
      {children}
    </Heading>
  );
};
