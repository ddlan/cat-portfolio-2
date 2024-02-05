import React, { type FC } from 'react';
import {
  Box, Button, HStack,
  Image
} from '@chakra-ui/react';

import folder from '../../images/folder.svg';
import {
  BodyText, Title
} from '../../styles/components';
import '../../styles/styles.css';

const WIP: FC = () => {
  return (
    <Box alignItems='start'>
      <HStack mb='20px' alignItems='center' gap='12px'>
        <Image src={folder} width='36px' mb='10px' />
        <Title> This Case Study is a Work in Progress</Title>
      </HStack>

      <BodyText my='32px'>
        {/* eslint-disable-next-line max-len */}
        The UX research content, interactable design, and context behind design decisions are being greatly expanded upon.
        <br /><br />
        {/* eslint-disable-next-line max-len */}
        In the meantime, you can check out my other work such as my Adobe case study or the 12-Week Design Challenge.
      </BodyText>

      <Button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        Back to Top ↑
        </Button>
    </Box>
  );
};

export default WIP;
