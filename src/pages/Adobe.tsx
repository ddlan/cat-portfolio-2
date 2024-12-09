import React, { useRef, type FC } from 'react';
import {
  Box, Button, VStack, Text
} from '@chakra-ui/react';

import '../styles/styles.css';

import SideNav from '../components/shared/SideNav';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Highlights from '../components/adobe/new/Highlights';
import Overview from '../components/adobe/new/Overview';
import Context from '../components/adobe/new/Context';
import Problem from '../components/adobe/new/Problem';

const Adobe: FC = () => {
  const navigate = useNavigate();

  const highlightsRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const interactionsRef = useRef<HTMLDivElement>(null);
  const visualDesignRef = useRef<HTMLDivElement>(null);
  const finalDesignRef = useRef<HTMLDivElement>(null);
  const retroRef = useRef<HTMLDivElement>(null);

  const sideNav = (
    <SideNav
      items={[
        { name: 'Highlights', ref: highlightsRef },
        { name: 'Overview', ref: overviewRef },
        { name: 'Context', ref: contextRef },
        { name: 'Problem', ref: problemRef },
        { name: 'Flow', ref: flowRef },
        { name: 'Layout', ref: layoutRef },
        { name: 'Interactions', ref: interactionsRef },
        { name: 'Visual Design', ref: visualDesignRef },
        { name: 'Final Design', ref: finalDesignRef },
        { name: 'Retro', ref: retroRef }
      ].map(({ name, ref }) => ({
        content: <Text color='#8c8c8c' fontWeight='400'>{name}</Text>,
        label: name,
        onClick: () => {
          ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }))}
    />
  );

  const navBack = () => {
    if ((window.history?.length ?? 0) > 1) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <Box pb='60px'>
        <Button
          borderRadius='70px'
          m='20px'
          background='white'
          border='#f2f2f2 1px solid'
          onClick={navBack}
        >
          <ArrowBackIcon mr='8px'/> <Text color='#8c8c8c' fontWeight='400'>Back</Text>
        </Button>
      <VStack
        mt="80px"
        mx='20vw'
        gap='72px'
      >
        {sideNav}
        <Highlights scrollRef={highlightsRef} />
        <Overview scrollRef={overviewRef} />
        <Context scrollRef={contextRef} />
        <Problem scrollRef={problemRef} />
      </VStack>
      <div style={{ height: '72px' }} />
    </Box>
  );
};

export default Adobe;
