import React, { type FC } from 'react';
import { motion } from 'framer-motion';

import selector from '../../images/selector.svg';
import '../../styles/styles.css'; ;

const elementMotion = {
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

const challengeMotion = {
  rest: {
    background:
      '-webkit-radial-gradient(circle, #ffffffa0, #ffffff20)',
    WebkitBackgroundClip: 'text',
    WebkitTextStroke: '1.5px transparent',
    color: 'rgb(23, 23, 23)',

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

const ChallengeCard: FC = () => {
  return (
    <motion.div
      className="text"
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ display: 'flex', overflow: 'hidden' }}
    >
      <>
        <motion.img
        src={selector}
        alt='figma selector'
        width='360px'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '360px'
        }}
        variants={elementMotion}
      />
      </>

      <motion.div
        className="card-title challenge"
        variants={challengeMotion}
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
        // CHALLENGE
      </motion.div>
      <motion.div
        className="ted-text-platform"
        variants={otherTextMotion}
      >
        Redesign // UXR
      </motion.div>
    </motion.div>
  );
};

export default ChallengeCard;
