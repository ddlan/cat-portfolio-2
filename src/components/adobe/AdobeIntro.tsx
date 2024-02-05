import React, { type FC } from 'react';
import {
  Pink
} from '../../styles/components';
import '../../styles/styles.css';
import Intro from '../Intro';

const AdobeIntro: FC = () => {
  return (
    <Intro
      title='Adobe Training and Certification Platform'
      subtitle='Visual and Motion UI Design'
      sideSections={[
        {
          title: 'MY ROLE',
          items: ['Product Designer', 'Program Manager']
        },
        {
          title: 'TEAM',
          items: ['Group Manager', 'Marketing Managers', 'Adobe Product Teams']
        },
        {
          title: 'TOOLS',
          items: ['Figma', 'Adobe XD', 'Monday.com', 'Miro', 'PowerBI']
        },
        {
          title: 'TIMELINE',
          items: ['2 months']
        }
      ]}
      body={
        <>
          {/* eslint-disable-next-line max-len */}
          Originally, I was a Program Manager intern on the Adobe Digital Experience (DX) Credentialing team. My primary objective was to house projects to increase and retain the number of accredited individuals. However, after conducting user research, I identified an opportunity for our program to vastly surpass our target KPIs.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          While we had credentialing programs, we did not offer training nor continuous learning, which was of high-demand from our users.
          <br /><br />
          {/* eslint-disable-next-line max-len */}
          After pitching this idea and gaining my team’s endorsement, I embarked on the goal of designing a scalable Adobe DX training program addressing our retention and net-new acquisition goals and integrating it effectively with our current certification programs.<br />
          <br /><br />
        </>
      }
      buttons={[
        {
          name: 'Skip to Takeaways ↓',
          onClick: () => {}
        },
        {
          name: 'Reach Out On LinkedIn ↗',
          onClick: () => {}
        }
      ]}
    />
  );
};

export default AdobeIntro;
