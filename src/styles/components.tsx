import { Heading, Image, Text, Card, Divider } from '@chakra-ui/react';
import styled from 'styled-components';

export const SCard = styled(Card).attrs({
  border: '1px solid #515151'
})`
    border-radius: 12px;
    background: var(--BG, linear-gradient(180deg, #1F1F1F 0%, #111 100%));
  `;

export const SDivider = styled(Divider).attrs({
  width: '80%',
  borderBottomWidth: '2px',
  my: '16px'
})``; export const Title = styled(Heading).attrs({
  size: 'xl',
  mb: '10px',
  fontWeight: '800',
  fontSize: '40px'
})``;
export const SideHeading = styled(Heading).attrs({
  fontWeight: 800,
  size: 'ml',
  color: '#fff6'
})``;
export const SectionHeading = styled(Heading).attrs({
  fontWeight: 600,
  size: 'lg',
  color: '#fff',
  mb: '8px'
})``;
export const SmallHeading = styled(SectionHeading).attrs({
  fontSize: '24px'
})``;
export const BodyText = styled(Text).attrs({
  lineHeight: '26px'
})``;
export const Pink = styled.span`
  color: #F890BA
`;
export const Orange = styled.span`
  color: #FFA37C
`;
export const WideImage = styled(Image).attrs({
  width: '90vw',
  maxWidth: '90vw',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%, 0)'
})``;
