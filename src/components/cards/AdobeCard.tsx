import React, { type FC } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import iphone13 from '../../images/iphone13.svg';
import '../../styles/styles.css'; import { Link } from 'react-router-dom';
;

const phoneMotion = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

const adobeMotion = {
  rest: {
    color: 'var(--transparent)',
    WebkitTextStroke: '0.85px #ffffff66',
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    WebkitTextStroke: '0.85px #FFA37C',
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

const AdobeCard: FC = () => {
  return (
    <Link to='adobe' className="text">
      <motion.div
        className="text"
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ display: 'flex', overflow: 'hidden' }}
      >
      <motion.img
        src={iphone13}
        alt='iphone13'
        width='275px'
        style={{
          position: 'absolute',
          top: '58%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '275px'
        }}
        variants={phoneMotion}
      />
      <motion.div
        className="card-title adobe"
        variants={adobeMotion}
      >
        Adobe
      </motion.div>
      <motion.div
        className="ted-text-platform"
        variants={otherTextMotion}
      >
        Accessibility // SaaS
      </motion.div>
    </motion.div>
  </Link>
  );
};

export default AdobeCard;
