import React, { type Ref, type FC } from 'react';
import {
  BodyText
} from '../../styles/components';
import '../../styles/styles.css';
import { Box } from '@chakra-ui/react';
import SectionTitle from '../shared/SectionTitle';
import { Link } from 'react-router-dom';

interface TProps {
  caseStudyRef: Ref<HTMLDivElement>
}

const WIP: FC<TProps> = ({ caseStudyRef }) => {
  return (
    <Box ref={caseStudyRef}>
      <SectionTitle title='⭐️ This Case Study is a Work in Progress' hideIcon={true} />
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        In the meantime, you can check out my other work at <Link to='/adobe' style={{ textDecoration: 'underline' }}>Adobe</Link> or the <Link to='/challenge' style={{ textDecoration: 'underline' }}>12-Week Design Challenge</Link>.
      </BodyText>
    </Box>
  );
};

export default WIP;
