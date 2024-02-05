import React, { type FC } from 'react';
import { SCard, BodyText, SideHeading } from '../../styles/components';

interface TLessonCardProps {
  title: string
  body: string
}
const LessonCard: FC<TLessonCardProps> = ({ title, body }) => (
  <SCard p='20px'>
    <SideHeading style={{ color: '#fff' }}>{title}</SideHeading>
    <BodyText style={{ color: '#ffffffbf' }}>{body}</BodyText>
  </SCard>
);

export default LessonCard;
