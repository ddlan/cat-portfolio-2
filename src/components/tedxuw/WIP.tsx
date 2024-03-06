import React, { type FC } from 'react';
import {
  Box
} from '@chakra-ui/react';

import {
  BodyText
} from '../../styles/components';
import '../../styles/styles.css';

import SectionTitle from '../shared/SectionTitle';
import BackToTop from '../shared/BackToTop';
import { Link } from 'react-router-dom';

const WIP: FC = () => {
  return (
    <Box alignItems='start'>
      <SectionTitle title='This Case Study is a Work in Progress' />

      <BodyText my='32px'>
        {/* eslint-disable-next-line max-len */}
        The UX research content, interactable design, and context behind design decisions are being greatly expanded upon.
        <br /><br />
        {/* eslint-disable-next-line max-len */}
        In the meantime, you can check out my other work at <Link to='/adobe' style={{ textDecoration: 'underline' }}>Adobe</Link> or the <Link to='/challenge' style={{ textDecoration: 'underline' }}>12-Week Design Challenge</Link>.
      </BodyText>

      <BackToTop />
    </Box>
  );
};

export default WIP;
