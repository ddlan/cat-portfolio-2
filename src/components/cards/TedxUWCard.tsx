import React, { useState, type FC, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import tedGroundWindmill from '../../images/ted-ground-windmill.svg';
import snowflake1 from '../../images/snowflake1.svg';
import snowflake2 from '../../images/snowflake2.svg';
import '../../styles/styles.css';
import { Link } from 'react-router-dom';

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

interface TSnowflake {
  type1: boolean
  left: string
  top: string
  isHovered: boolean
  gust: number
}

const Snowflake: FC<TSnowflake> = ({ type1, left, top, isHovered, gust }) => {
  const xMovement = (Math.random() * 60) - 20 + gust;

  return (
    <motion.img
      src={type1 ? snowflake1 : snowflake2}
      style={{ height: '12px', width: '12px', left, top, position: 'absolute' }}
      initial={{
        opacity: 1
      }}
      animate={{
        opacity: isHovered ? 1 : 0,
        x: isHovered ? xMovement : 0,
        y: isHovered ? (type1 ? 200 : 100) : 0,
        transition: {
          duration: isHovered ? 20 : 0,
          opacity: {
            duration: isHovered ? 0.5 : 0
          }
        }
      }}
    />
  );
};

const TedxUWCard: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [gustNum, setGustNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGustNum(prev => (prev + 1) % 4);
    }, 5000);

    return () => { clearInterval(interval); };
  }, []);

  const renderSnowflakes = () => (
    <>
      {[
        { type1: true, left: '10%', top: '60%' },
        { type1: true, left: '24%', top: '35%' },
        { type1: true, left: '33%', top: '-5%' },
        { type1: true, left: '55%', top: '13%' },
        { type1: true, left: '70%', top: '22%' },
        { type1: true, left: '90%', top: '30%' },

        { type1: false, left: '12%', top: '86%' },
        { type1: false, left: '29%', top: '3%' },
        { type1: false, left: '35%', top: '70%' },
        { type1: false, left: '45%', top: '18%' },
        { type1: false, left: '62%', top: '9%' },
        { type1: false, left: '68%', top: '83%' },
        { type1: false, left: '83%', top: '63%' },
        { type1: false, left: '99%', top: '94%' }
      ].map(({ type1, left, top }) => (
        <Snowflake
          key={left + top}
          type1={type1}
          left={left}
          top={top}
          isHovered={isHovered}
          gust={[0, 100, 0, -100][gustNum]}
        />
      ))}
    </>
  );

  return (
    <Link to='tedxuw' className="text">
      <motion.div
        className="text"
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={{ display: 'flex', overflow: 'hidden' }}
        onMouseEnter={() => { setIsHovered(true); }}
        onMouseLeave={() => { setIsHovered(false); }}
      >
      <motion.img
        src={tedGroundWindmill}
        alt='ground with windmill'
        width='100%'
        style={{
          position: 'absolute',
          bottom: '-4%',
          borderRadius: '12px',
          minWidth: '350px'
        }}
        variants={groundMotion}
      />
      {renderSnowflakes()}
      <Box className="ted-title-container">
        <Box className="card-titlex">
          <motion.div
            className="card-title card-title-tedx"
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
  </Link>
  );
};

export default TedxUWCard;
