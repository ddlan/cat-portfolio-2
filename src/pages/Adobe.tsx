import React, { useRef, type FC } from 'react';
import {
  Box, HStack, Image, Spacer, Text, VStack
} from '@chakra-ui/react';

import '../styles/styles.css';

import SideNav from '../components/shared/SideNav';

const Adobe: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const sideNav = (
    <SideNav
      items={[
        {
          name: 'Highlights',
          ref
        },
        {
          name: 'Overview',
          ref
        },
        {
          name: 'Context',
          ref
        },
        {
          name: 'Problem',
          ref
        },
        {
          name: 'Flow',
          ref
        },
        {
          name: 'Layout',
          ref
        },
        {
          name: 'Interactions',
          ref
        },
        {
          name: 'Visual Design',
          ref
        },
        {
          name: 'Final Design',
          ref
        },
        {
          name: 'Retro',
          ref
        }
      ].map(({ name, ref }) => ({
        content: <Text color='#8c8c8c' fontWeight='400'>{name}</Text>,
        label: name,
        onClick: () => {
          ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }))}
    />
  );

  return (
    <Box>
      <Box
        mt="100px"
        mx='20vw'
      >
        {sideNav}
        Adober
      </Box>
    </Box>
  );
};

export default Adobe;
