import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Image, Text, HStack } from '@chakra-ui/react';

import paperSvg from '../../images/new/paper.svg';
import donutHole from '../../images/new/donut-hole.svg';
import sparkle from '../../images/new/sparkle.svg';

// Account for padding
const WIDTH = 310 - 24;
const HEIGHT = 344 - 40;

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, name
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  name: string
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const [label, percentage] = name.split('\n');

  return (
    <>
      <text x={x} y={y} textAnchor='middle' style={{ fontSize: '10px' }}>
        {label}
      </text>
      <text x={x} y={y + 11} textAnchor='middle' fill='#8C8C8C' style={{ fontSize: '9px' }}>
        {percentage}
      </text>
    </>
  );
};

const DonutChart = () => {
  const data = [
    { name: 'Community\n33.3%', value: 33.3 },
    { name: 'Reflection\n33.3%', value: 33.3 },
    { name: 'Dualism\n33.3%', value: 33.3 }
  ];

  return (
    <>
      <PieChart width={WIDTH} height={HEIGHT}>
        <defs>
          <pattern
            id='image-fill'
            patternUnits="userSpaceOnUse"
            width={100}
            height={100}
          >
            <image href={paperSvg} width="100" height="100" />
          </pattern>
        </defs>
        <Pie
          data={data}
          label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
          innerRadius={55} // Inner radius for the donut effect
          outerRadius={125}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill='url(#image-fill)' stroke='#D6D5DB' strokeWidth='1px' />
          ))}
        </Pie>
      </PieChart>
      <Image src={donutHole} position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' />
      <HStack position='absolute' right='8px' bottom='4px'>
          <Image h='12px' w='12px' src={sparkle}/>
          <Text color="#d6d5db">Personal Recipe for Growth</Text>
        </HStack>
    </>
  );
};

export default DonutChart;
