import React, { type FC } from 'react';
import {
  BodyText
} from '../../styles/components';
import '../../styles/styles.css';
import { Box } from '@chakra-ui/react';
import SectionTitle from '../shared/SectionTitle';
import { Link } from 'react-router-dom';

const WIP: FC = () => {
  return (
    <Box>
      <SectionTitle title='⭐️ This Case Study is a Work in Progress' hideIcon={true} />
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        In the meantime, you can check out my other work such as my <Link to='/adobe' style={{ textDecoration: 'underline' }}>Adobe case study</Link> or the <Link to='/challenge' style={{ textDecoration: 'underline' }}>12-Week Design Challenge</Link>.
      </BodyText>
    </Box>
  );
};

export default WIP;
