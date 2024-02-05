import React, { type FC } from 'react';
import { motion } from 'framer-motion';

import codeblock from '../../images/codeblock.png';
import '../../styles/styles.css'; import { Link } from 'react-router-dom';
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

const technovaMotion = {
  rest: {
    background:
      '-webkit-radial-gradient(circle, #ffffffa0, #ffffff20)',
    WebkitBackgroundClip: 'text',
    WebkitTextStroke: '1.5px #907CFF00',
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
  return (
    <Link to='technova' className="text">
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
