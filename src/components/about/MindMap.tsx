import React, { type FC, useRef, useEffect } from 'react';
import { HStack, Text, VStack, Image } from '@chakra-ui/react';
import { ForceGraph2D } from 'react-force-graph';
import { useResize } from '../../util/useResize';

import '../../styles/styles.css';
import { SCard } from '../../styles/components';
import paper from '../../images/new/paper.png';
import move from '../../images/new/move.svg';

const graphData = {
  nodes: [
    { id: 'Yapping' },
    { id: 'Hip Hop Dance' },
    { id: 'Crochet' },
    { id: 'Reflective Writing' },
    { id: 'Spatial Art' },
    { id: '3D Sculpting' },
    { id: 'Robotics' }
  ],
  links: [
    { source: 'Yapping', target: 'Hip Hop Dance', value: 1 },
    { source: 'Yapping', target: 'Reflective Writing', value: 1 },
    { source: 'Hip Hop Dance', target: 'Crochet', value: 1 },
    { source: 'Crochet', target: 'Reflective Writing', value: 1 },
    { source: 'Reflective Writing', target: 'Spatial Art', value: 1 },
    { source: 'Spatial Art', target: '3D Sculpting', value: 1 },
    { source: '3D Sculpting', target: 'Robotics', value: 1 },
    { source: 'Spatial Art', target: 'Robotics', value: 1 }
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

const MindMap: FC = () => {
  const graphParentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResize(graphParentRef);

  const graphRef = useRef<any>(null);
  useEffect(() => {
    // Using any type to simplify
    graphRef?.current?.d3Force('link')?.distance(35);
  }, [graphRef]);

  return (
    <SCard h='100%' className='paper-card'>
      <VStack
        ref={graphParentRef}
        minH='0'
        h='100%'
        justifyContent='space-between'
        maxW='100%'
        flex='1'
        overflow='hidden'
      >
        <Image
          src={paper}
          position='absolute'
          h='93%'
          w={height - 36}
          left='12px'
          borderRadius='4px'
        />
        <ForceGraph2D
          ref={graphRef}
          width={width}
          height={height}
          graphData={graphData}
          linkColor={() => '#d6d5db'}
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
              color: 'white'
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
            ctx.strokeStyle = '#d6d5db';
            ctx.stroke();

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#8c8c8c';
            ctx.fillText(label, node.x, node.y);
          }}
        />
        <HStack position='absolute' right='18px' bottom='14px'>
          <Image h='12px' w='12px' src={move} />
          <Text color="#d6d5db">Move and drag</Text>
        </HStack>
      </VStack>
    </SCard>
  );
};

export default MindMap;
