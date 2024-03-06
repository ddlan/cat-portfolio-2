import React, { type FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import selector from '../../images/selector.svg';
import catCursor from '../../images/cat-cursor.png';
import youCursor from '../../images/you-cursor.png';
import editorLeft from '../../images/editor-left.png';
import editorSearch from '../../images/editor-search.png';
import editorBottom from '../../images/editor-bottom.png';
import editorTop from '../../images/editor-top.png';
import '../../styles/styles.css';

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

const getSlideMotion = (
  { startX = 0, startY = 0 }: { startX?: number, startY?: number }
) => ({
  rest: {
    duration: 0.2,
    x: startX,
    y: startY,
    type: 'linear',
    transition: {
      x: { bounce: 0 }
    }
  },
  hover: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      type: 'linear'
    }
  }
});

const challengeMotion = {
  rest: {
    WebkitBackgroundClip: 'text',
    WebkitTextStroke: '0.85px #ffffff66',
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
    <Link to='challenge' className="text">
      <motion.div
        className="text"
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ display: 'flex', overflow: 'hidden' }}
      >
        <>
          <motion.img
            src={catCursor}
            width='52px'
            style={{
              position: 'absolute',
              top: '15%',
              left: '30%'
            }}
            variants={elementMotion}
          />
          <motion.img
            src={youCursor}
            width='52px'
            style={{
              position: 'absolute',
              top: '63%',
              left: '66%'
            }}
            variants={elementMotion}
          />
          <motion.img
            src={editorLeft}
            width='56px'
            style={{
              position: 'absolute',
              left: '0%',
              top: '5%'
            }}
            variants={getSlideMotion({ startX: -56 })}
          />
          <motion.img
            src={editorTop}
            width='240px'
            style={{
              position: 'absolute',
              left: '54%',
              top: 0
            }}
            variants={getSlideMotion({ startY: -88 })}
          />
          <motion.img
            src={editorBottom}
            width='130px'
            style={{
              position: 'absolute',
              left: '74%',
              bottom: 0
            }}
            variants={getSlideMotion({ startY: 68 })}
          />
          <motion.img
            src={editorSearch}
            width='218px'
            style={{
              position: 'absolute',
              left: '20%',
              bottom: '20px'
            }}
            variants={getSlideMotion({ startY: 68 })}
          />
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
    </Link>
  );
};

export default ChallengeCard;
