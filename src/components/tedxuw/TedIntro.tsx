import React, { type FC } from 'react';
import {
  Pink
} from '../../styles/components';
import '../../styles/styles.css';
import Intro from '../shared/Intro';

const TedIntro: FC = () => {
  return (
    <Intro
      title='TEDx Talk Waterloo'
      subtitle='Visual and Motion UI Design'
      sideSections={[
        {
          title: 'MY ROLE',
          items: ['Web Designer', 'Motion Designer']
        },
        {
          title: 'TEAM',
          items: ['Web Designer', 'Developer', 'VP Marketing']
        },
        {
          title: 'TOOLS',
          items: ['Figma', 'FigJam']
        },
        {
          title: 'TIMELINE',
          items: ['8 months']
        }
      ]}
      body={
        <>
         {/* eslint-disable-next-line max-len */}
          TEDxUW 2023, themed <Pink>&quot;From the Ground Up,&quot;</Pink> marks the first in-person TEDx Talk event by the University of Waterloo since the pandemic. This occasion symbolizes renewal and community reconnection.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          Embracing this theme, the website is a hub for users to be empowered to bring their ideas to life and leave a lasting impact on the world around them.
          <br />
          <br />
        </>
      }
      buttons={[
        {
          name: 'Read WIP Case Study',
          onClick: () => {}
        },
        {
          name: 'Live Website',
          onClick: () => {}
        }
      ]}
    />
  );
};

export default TedIntro;
