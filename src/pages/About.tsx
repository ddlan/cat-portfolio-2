import React, { useRef, type FC } from 'react';
import {
  Box, Grid, GridItem, HStack,
  Text, VStack, Container
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ForceGraph2D } from 'react-force-graph';

import computer from '../images/computer.png';
import toolbox from '../images/toolbox.png';

import '../styles/styles.css';
import { PrototypeFrame, SCard, SGridCard } from '../styles/components';
import { HEIGHT, MARGIN } from '../styles/constants';
import Navbar from '../components/Navbar';
import BrowserSidebar from '../components/homepage/BrowserSidebar';
import ChangeWorld from '../components/about/ChangeWorld';
import { PROTOTYPES } from '../constants';
import { useResize } from '../util/useResize';

const graphData = {
  nodes: [
    { id: 'Crocheting' },
    { id: 'Hip Hop Dance' },
    { id: 'Curling' },
    { id: 'Reflective Writing' },
    { id: 'Spatial Art' },
    { id: '3D Sculpting' },
    { id: 'Robotics' }
  ],
  links: [
    { source: 'Crocheting', target: 'Hip Hop Dance', value: 1 },
    { source: 'Hip Hop Dance', target: 'Curling', value: 1 },
    { source: 'Curling', target: 'Reflective Writing', value: 1 },
    { source: 'Reflective Writing', target: 'Spatial Art', value: 1 },
    { source: 'Spatial Art', target: '3D Sculpting', value: 1 },
    { source: '3D Sculpting', target: 'Robotics', value: 1 }
  ]
};

const roundRect = ({ ctx, x0, y0, x1, y1, r, color }: {
  ctx: CanvasRenderingContext2D
  x0: number
  y0: number
  x1: number
  y1: number
  r: number
  color: string
}) => {
  const w = x1 - x0;
  const h = y1 - y0;
  if (r > w / 2) r = w / 2;
  if (r > h / 2) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x1 - r, y0);
  ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
  ctx.lineTo(x1, y1 - r);
  ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
  ctx.lineTo(x0 + r, y1);
  ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
  ctx.lineTo(x0, y0 + r);
  ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

const computerMotion = {
  rest: {
    opacity: 1
  },
  hover: {
    opacity: 0
  }
};

const About: FC = () => {
  const graphParentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResize(graphParentRef);

  return (
    <Box>
      <Navbar isWork={false}/>
      <SCard
        h={`calc(100vh - ${HEIGHT.navbar} - ${MARGIN.homepageB})`}
        minH='600px'
        minW='800px'
        mx={MARGIN.homepageX}
        mb={MARGIN.homepageB}
        p='12px'
      >
        <HStack maxH='100%'>
          <BrowserSidebar isWork={false} />
          <Grid
            maxW='100%'
            maxH='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap='12px'
          >
            <GridItem minW='280px'><ChangeWorld /></GridItem>
            <GridItem>
              <SGridCard>
                <div style={{ height: '40px' }}/>
                <div>
                  <motion.img
                    src={computer}
                    className='centered-2'
                    initial="rest"
                    whileHover="hover"
                    variants={computerMotion}
                  />
                  <motion.img
                    src={toolbox}
                    className='centered'
                    initial="hover"
                    whileHover="rest"
                    variants={computerMotion}
                  />
                </div>
                <Text className='scard-caption'>My Toolbox</Text>
              </SGridCard>
            </GridItem>
            <GridItem rowSpan={2}>
              <SGridCard>
                <div style={{ height: '40px' }}/>
                <PrototypeFrame src={PROTOTYPES.directory} style={{ height: '100%' }} />
                <Text className='scard-caption'>Directory of Paths I&apos;ve Taken</Text>
              </SGridCard>
            </GridItem>
            <GridItem colSpan={2} minH='0'>
              <SGridCard>
                <VStack
                  ref={graphParentRef}
                  minH='0'
                  h='100%'
                  justifyContent='space-between'
                  maxW='100%'
                  flex='1'
                  overflow='hidden'
                >
                  <ForceGraph2D
                    width={width}
                    height={height}
                    graphData={graphData}
                    linkColor={() => '#727272'}
                    nodeCanvasObject={(node, ctx, globalScale) => {
                      node.x = node.x ?? 0;
                      node.y = node.y ?? 0;
                      node.color = node.color ?? 'transparent';

                      const label = node.id;
                      const fontSize = 6 + globalScale / 12;
                      ctx.font = `italic ${fontSize}px Sans-Serif`;
                      const textWidth = ctx.measureText(label).width;
                      const bckgDimensions: [number, number] = [textWidth, fontSize]
                        .map(n => n + fontSize * 1.7) as [number, number];

                      roundRect({
                        ctx,
                        x0: node.x - bckgDimensions[0] / 2,
                        y0: node.y - bckgDimensions[1] / 2,
                        x1: node.x + bckgDimensions[0] / 2,
                        y1: node.y + bckgDimensions[1] / 2,
                        r: 100,
                        color: 'rgba(34, 34, 34)'
                      });

                      ctx.beginPath();
                      ctx.roundRect(
                        node.x - bckgDimensions[0] / 2,
                        node.y - bckgDimensions[1] / 2,
                        bckgDimensions[0],
                        bckgDimensions[1],
                        100
                      );
                      ctx.lineWidth = 0.5;
                      ctx.strokeStyle = 'rgb(73, 73, 73)';
                      ctx.stroke();

                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'middle';
                      ctx.fillStyle = '#fff';
                      ctx.fillText(label, node.x, node.y);
                    }}
                  />
                  <Container position='absolute' right={0} bottom={0}>
                    <Text className='scard-caption'>Mind Map of My Interests</Text>
                  </Container>
                </VStack>s
              </SGridCard>
            </GridItem>
          </Grid>
        </HStack>
      </SCard>
    </Box>
  );
};

export default About;
