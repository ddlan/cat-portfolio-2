import React, { type FC } from 'react';
import {
  Box, Button
} from '@chakra-ui/react';

import {
  BodyText
} from '../../styles/components';
import '../../styles/styles.css';

import SectionTitle from '../shared/SectionTitle';
import BackToTop from '../shared/BackToTop';

const WIP: FC = () => {
  return (
    <Box alignItems='start'>
      <SectionTitle title='This Case Study is a Work in Progress' />

      <BodyText my='32px'>
        {/* eslint-disable-next-line max-len */}
        The UX research content, interactable design, and context behind design decisions are being greatly expanded upon.
        <br /><br />
        {/* eslint-disable-next-line max-len */}
        In the meantime, you can check out my other work such as my Adobe case study or the 12-Week Design Challenge.
      </BodyText>

      <BackToTop />
    </Box>
  );
};

export default WIP;
