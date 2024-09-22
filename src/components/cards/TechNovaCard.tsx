import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import codeblock from '../../images/codeblock.png';
import ufo from '../../images/ufo.png';
import telescope from '../../images/telescope.png';
import spaceJourney from '../../res/audio/Space Journey.mp3';
import '../../styles/styles.css';
import useSound from 'use-sound';
;

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

const technovaMotion = {
  rest: {
    WebkitBackgroundClip: 'text',
    WebkitTextStroke: '0.85px #ffffff66',
    color: 'rgb(23, 23, 23)',

    ease: 'easeOut',
    duration: 0.2,
    type: 'tween'
  },
  hover: {
    WebkitTextStroke: '0.85px #907CFF',
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

const TechNovaCard: FC = () => {
  const [play, { stop, sound }] = useSound(spaceJourney as string, { volume: 0.5 });
  window.addEventListener('blur', () => { stop(); });

  return (
    <Link
      to='technova'
      className="text"
      onMouseEnter={() => { play(); }}
      onMouseLeave={() => { stop(); }}
      onClick={() => { sound.fade(1, 0, 1000); }}
    >
      <motion.div
        className="text"
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ display: 'flex', overflow: 'hidden' }}
      >
        <>
          <motion.img
            src={codeblock}
            alt='code block'
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
          <motion.img
            src={ufo}
            width='130px'
            style={{
              position: 'absolute',
              left: '11%',
              top: 0
            }}
            variants={getSlideMotion({ startX: -30, startY: -100 })}
          />
          <motion.img
            src={telescope}
            width='130px'
            style={{
              position: 'absolute',
              right: '5%',
              bottom: 0
            }}
            variants={getSlideMotion({ startY: 130 })}
          />
        </>

        <motion.div
          className="card-title challenge"
          variants={technovaMotion}
        >
          TechNova
        </motion.div>
        <motion.div
          className="ted-text-platform"
          variants={otherTextMotion}
        >
          Visual / Web
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default TechNovaCard;
