import React, { type FC } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import tedGroundWindmill from '../images/ted-ground-windmill.svg';
import '../styles/styles.css';

const groundMotion = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
    marginBottom: '-6%'
  },
  hover: {
    opacity: 1,
    marginBottom: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

const tedxMotion = {
  rest: {
    color: 'var(--transparent)',
    WebkitTextStroke: '0.85px #ffffff66',
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    color: 'var(--ted-red)',
    WebkitTextStroke: '0.85px var(--ted-red)',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

const otherTextMotion = {
  rest: {
    color: 'var(--variable-collection-mid-light)',
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    color: 'var(--white)',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

const TedxUWCard: FC = () => {
  return (
    <motion.div
      className="text"
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ display: 'flex', overflow: 'hidden' }}
    >
    <motion.img
      src={tedGroundWindmill}
      alt='ground with windmill'
      width='100%'
      style={{
        position: 'absolute',
        bottom: '-4%',
        borderRadius: '12px'
      }}
      variants={groundMotion}
    />
    <Box className="tedxuw-logo">
      <Box className="ted-text-tedx">
        <motion.div
          className="ted-text-ted"
          variants={tedxMotion}
        >
          TED
        </motion.div>
        <motion.div
          className="ted-text-x"
          variants={tedxMotion}
        >
          X
        </motion.div>
      </Box>
      <motion.div
        className="ted-text-uw"
        variants={otherTextMotion}
      >
        UW
      </motion.div>
    </Box>
    <motion.div
      className="ted-text-platform"
      variants={otherTextMotion}
    >
      Cross-Platform // Motion
    </motion.div>
  </motion.div>
  );
};

export default TedxUWCard;
