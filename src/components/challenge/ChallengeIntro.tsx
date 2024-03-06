import React, { type FC } from 'react';
import {
  Blue,
  SideHeading
} from '../../styles/components';
import '../../styles/styles.css';
import Intro from '../shared/Intro';
import LoudButton from '../shared/LoudButton';

interface TProps {
  scrollToDesign: () => void
}

const ChallengeIntro: FC<TProps> = ({ scrollToDesign }) => {
  return (
    <Intro
      title='Collaborative Design Incubator'
      subtitle='Personal Challenge'
      sideSections={[
        {
          title: 'MY ROLE',
          items: ['UX Designer', 'UX Researcher']
        },
        {
          title: 'TOOLS',
          items: ['Figma', 'Figjam', 'Adobe After Effects', 'Usertesting.com',
            'Jira', 'ClickUp', 'Notion', 'Excel', 'Webflow', 'Blender']
        },
        {
          title: 'TIMELINE',
          items: ['3 months']
        }
      ]}
      body={
        <>
          <SideHeading>CONTEXT</SideHeading>
          {/* eslint-disable-next-line max-len */}
          I was always drawn to design, but for the longest time I rejected it. I never believed I had the skills to work in the “professional” industry and when I was young, I desperately wanted to avoid the stereotype of being the quiet art girl.
          <br/><br/>
          {/* eslint-disable-next-line max-len */}
          Then on October 1, 2021, I committed myself to create something new every week alongside someone new for 12 weeks. This was my way of challenging my collaborative design skills, broadening my perspective, and learning from others.
          <br/><br/>
          <Blue>This is my journey on fostering my love for UX and re-discovering who I am.</Blue>
          <br/><br/>

          <SideHeading>RESULT</SideHeading>
          {/* eslint-disable-next-line max-len */}
          From mentoring a student to working with experienced designers, and improving communication synergy with developers to working with aspiring researchers at a designathon, this was a <Blue>“hey, I can do it!”</Blue> to myself.
          <br/><br/>
          {/* eslint-disable-next-line max-len */}
          Not only was it educational to sometimes break the norms of UX and at other times allow myself to be constrained by it, I realized it was fun.
          <br/><br/>
          {/* eslint-disable-next-line max-len */}
          <Blue>I hope this inspires you</Blue> to conduct a “challenge” to do the things you’ve always wanted to do. It is an experience filled with warm, fuzzy feelings and the ever-growing pizzazz of getting to know yourself even just a little bit more.
          <br/><br/>
        </>
      }
      buttons={[
        <LoudButton key='a' onClick={scrollToDesign}>Check out Featured Designs ↓</LoudButton>
      ]}
    />
  );
};

export default ChallengeIntro;
