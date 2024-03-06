import React, { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import iphone13 from '../../images/iphone13-full.png';
import sparkle1 from '../../images/sparkle1.png';
import sparkle2 from '../../images/sparkle2.svg';
import twinkle from '../../res/audio/Twinkle.mp3';
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

interface TSparkle {
  type1?: boolean
  isLeft?: boolean
  left: string
  top: string
  size: string
  rotate?: number
  isHovered: boolean
}

const Sparkle: FC<TSparkle> = ({
  type1 = false, isLeft = false, left, top, size, rotate = 0, isHovered
}) => {
  return (
    <motion.img
      src={type1 ? sparkle1 : sparkle2}
      style={{ height: size, width: size, left, top, position: 'absolute' }}
      initial={{
        rotate
      }}
      animate={{
        opacity: isHovered ? 1 : 0,
        x: isHovered ? 0 : (isLeft ? -50 : 50),
        transition: {
          duration: 0.4
        }
      }}
    />
  );
};

const AdobeCard: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [play] = useSound(twinkle as string);

  const renderSparkles = () => (
    <>
      <Sparkle
        type1
        left='68%'
        top='35%'
        size='64px'
        isHovered={isHovered}
      />
      <Sparkle
        type1
        isLeft
        left='18%'
        top='62%'
        size='48px'
        rotate={70}
        isHovered={isHovered}
      />
      <Sparkle
        type1
        isLeft
        left='6%'
        top='120%'
        size='52px'
        isHovered={isHovered}
      />

      <Sparkle
        isLeft
        left='7%'
        top='7%'
        size='42px'
        isHovered={isHovered}
      />
      <Sparkle
        isLeft
        left='11%'
        top='80%'
        size='36px'
        isHovered={isHovered}
      />
      <Sparkle
        left='74%'
        top='3%'
        size='36px'
        isHovered={isHovered}
      />
      <Sparkle
        left='88%'
        top='39%'
        size='24px'
        isHovered={isHovered}
      />
      <Sparkle
        left='75%'
        top='93%'
        size='42px'
        isHovered={isHovered}
      />
      <Sparkle
        left='82%'
        top='160%'
        size='36px'
        isHovered={isHovered}
      />
    </>
  );

  return (
    <Link to='adobe' className="text scrollbox">
      <motion.div
        className="text scrollbox-inner"
        initial="rest"
        whileHover="hover"
        animate="rest"
        onMouseEnter={() => {
          setIsHovered(true);
          play();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <motion.img
          src={iphone13}
          alt='iphone13'
          width='275px'
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 30%)',
            minWidth: '275px',
            paddingBottom: '32px'
          }}
          variants={phoneMotion}
        />
        {renderSparkles()}
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
