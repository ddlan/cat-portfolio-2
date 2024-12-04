import React, { type FC } from 'react';
import { VStack, Image, Text, Box, HStack, Icon } from '@chakra-ui/react';


import briefcase from '../images/new/briefcase.svg';
import lightbulb from '../images/new/lightbulb.svg';
import avatar from '../images/new/avatar.svg';
import document from '../images/new/document.svg';
import bag from '../images/new/bag.svg';

import '../styles/styles.css';
import { SCard } from '../../../styles/components';
import SideNav from '../../shared/SideNav';

const Homepage: FC = () => {
  return (
    <VStack h='100%'
      w='630px'
      my='100px'
      mx='auto'
    >
      <SideNav
        items={[
          {
            content: <Image src={briefcase} />,
            label: 'Work',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={lightbulb} />,
            label: 'Side projects',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={avatar} />,
            label: 'About',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={document} />,
            label: 'Resume',
            showTooltip: true,
            onClick: () => {}
          },
          {
            content: <Image src={bag} color='#8c8c8c' />,
            label: 'Design Studio',
            showTooltip: true,
            onClick: () => {}
          }
        ]}
      />
    </VStack>
  );
};

export default Homepage;
