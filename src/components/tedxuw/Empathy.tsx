import React, { type FC } from 'react';
import {
  Box, HStack,
  Image, ListItem,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList
} from '@chakra-ui/react';
import styled from 'styled-components';

import userflow from '../../images/userflow.png';
import userflow2 from '../../images/userflow2.png';
import {
  SCard, BodyText,
  Pink, SectionHeading
} from '../../styles/components';
import '../../styles/styles.css';
import SectionTitle from '../shared/SectionTitle';

const data: Array<{
  type: string
  goal: string
  notes: Array<{
    point: JSX.Element | string
    subpoints?: string[]
  }>
  importance: 'Medium' | 'High'
}> = [
  {
    type: 'Competitive Analysis',
    goal: 'Emphasis on “From the Ground Up” branding!',
    notes: [
      // eslint-disable-next-line max-len
      { point: <><Pink>Playfulness in colour and branding</Pink> (SF uses green, Calgary uses yellow, “noisy” and gradient effects on red)</> },
      {
        point: <>Those that stood out (5k+ followers) have <Pink>uniqueness factor</Pink></>,
        subpoints: [
          'SF has website for post-event and pre-event',
          'Post-event, Youtube Video CTA',
          'Pre-Event, easily discoverable venue, sign-up, speaker details'
        ]
      },
      // eslint-disable-next-line max-len
      { point: <>Few have <Pink>“story driven” content</Pink>--there were themes like blueprint, inner strengths, etc.</> }
    ],
    importance: 'Medium'
  },
  {
    type: 'User Flow Audit',
    goal: 'Revamp the user flow to make it even throughout',
    notes: [
      { point: 'Repeat tabs and links' },
      // eslint-disable-next-line max-len
      { point: 'Causes several moments of high cognitive load, where users must scan many options before finding their desired one' }
    ],
    importance: 'High'
  },
  {
    type: 'Audience Audit',
    goal: 'Confusion on target-audience--confirm with team!',
    notes: [
      // eslint-disable-next-line max-len
      { point: <>Which priority of users accessing site? <Pink>Connect with team on this to conduct data research!</Pink></> },
      { point: 'Speakers / potential sponsor focus for this “version” of the website' },
      { point: 'Update website with venue details when event finalized (reference SFU, Toronto)' },
      { point: <Pink>Are users usually visiting the site on mobile or web?</Pink> }
    ],
    importance: 'High'
  }
];

const discoveryData = [
  {
    emoji: '🔍',
    text: 'Scanability'
  },
  {
    emoji: '📖',
    text: 'Story-driven engagement'
  },
  {
    emoji: '📱',
    text: 'Mobile accessibility'
  }
];

const STh = styled(Th).attrs({
  py: '24px',
  color: '#fff',
  fontSize: '16px',
  textTransform: 'none'
})``;

const TagColors = {
  text: {
    Medium: '#D3891A',
    High: '#D31C1A'
  },
  background: {
    Medium: '#FBF3E8',
    High: '#FAE1E2'
  }
};

const Empathy: FC = () => {
  return (
    <Box alignItems='start'>
      <SectionTitle title='Empathy through research' />

      <SectionHeading mb='20px'>Audit Summary</SectionHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        After receiving the branding system and graphics from the branding team, we jumped into research to get an idea of how we wanted to envision the TEDxUW website based on previous TEDx events and other events to make sure we bring something exciting and new to the table.
      </BodyText>

      <SCard mt='20px'>
        <TableContainer whiteSpace='normal'>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <STh flex={2}>Type</STh>
                <STh flex={1}>Goal</STh>
                <STh flex={2}>Notes & Observations</STh>
                <STh flex={1}>Importance</STh>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(row => (
                <Tr key={row.type}>
                  <Td>
                    <Tag size='md' borderRadius='full' textAlign='center' background='#fff'>
                      <BodyText color='#000'>{row.type}</BodyText>
                    </Tag>
                  </Td>
                  <Td>
                    <BodyText>{row.goal}</BodyText>
                  </Td>
                  <Td>
                    <UnorderedList>
                      {row.notes.map(note => (
                        <>
                        <ListItem key={JSON.stringify(note.point)}>{note.point}</ListItem>
                          {'subpoints' in note && note.subpoints?.map(subpoint => (
                            <ListItem key={subpoint} ml='16px'>{subpoint}</ListItem>
                          ))

                          }
                        </>
                      ))}
                    </UnorderedList>
                  </Td>
                  <Td>
                    <Tag size='md' borderRadius='full' textAlign='center'
                      border={`1.5px solid ${TagColors.text[row.importance]}`}
                      background={TagColors.background[row.importance]}
                    >
                      <BodyText color={TagColors.text[row.importance]}>{row.importance}</BodyText>
                    </Tag>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </SCard>

      <SectionHeading mt='32px' mb='20px'>User Flow Audit</SectionHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        Through our research, this was the original user flow of our last website. There were conflicting call to actions resulting in difficulty finding information reported by users within the usability tests. Some pages were content heavy while others were not; the distribution of content could be evened out to improve navigation of the website.
      </BodyText>

      <SCard my='32px' p='32px'>
        <Image src={userflow} />
      </SCard>

      <BodyText>
        {/* eslint-disable-next-line max-len */}
        For the updated flow, I reduced the number of call to actions to always one or two being emphasized on the same page. Users want to find information about the event, or learn more about TEDxUW’s impact to see if it’s valuable sponsoring us. With this knowledge, the website navigation was grouped and split up according to these two demographics.
      </BodyText>

      <SCard my='32px' p='32px'>
        <Image src={userflow2} />
      </SCard>

      <SectionHeading mt='32px' mb='20px'>Discovery: “What I Want, Fast”</SectionHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        Above all, all the data pointed to a clear goal when exploring the website; users wants to quickly scan if they’re interested in the event and then sign-up to it seamlessly. We aim to build a clear, easy-to-navigate website to find CTAs they are looking for and meet the following standards that are a summary of the research and audits we’ve conducted previously.
      </BodyText>

      <HStack alignItems='stretch' gap='24px' mt='32px'>
        {discoveryData.map(discovery => (
          <SCard key={discovery.emoji} flex='1' textAlign='center'
            py='32px' alignItems='center'
          >
          <BodyText fontSize='24px'>{discovery.emoji}</BodyText>
          <BodyText>{discovery.text}</BodyText>
        </SCard>
        ))}
      </HStack>
    </Box>
  );
};

export default Empathy;
