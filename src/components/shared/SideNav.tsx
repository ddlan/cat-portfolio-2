import React, { type ReactNode, type FC } from 'react';
import { Button, Tooltip, VStack } from '@chakra-ui/react';

import './SideNav.css'; // Import the CSS file

interface TProps {
  items: Array<{
    content: ReactNode
    label: string
    showTooltip?: boolean
    onClick: () => void
  }>
};

const SideNav: FC<TProps> = ({ items }) => {
  return (
    <VStack className="floating-nav">
      {items.map(({ content, label, showTooltip, onClick }) => {
        const b = (
          <Button
            className='nav-btn'
            key={label}
            aria-label={label}
            onClick={onClick}
            background='white'
            size='sm'
          >
            {content}
          </Button>
        );

        if (showTooltip === true) {
          return (
            <Tooltip key={label} label={label} borderRadius='4px' placement='right'>
              {b}
            </Tooltip>
          );
        };

        return b;
      })}
    </VStack>
  );
};

export default SideNav;
