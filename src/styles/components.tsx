import { Heading, Image, Text, Card, Divider } from '@chakra-ui/react';
import styled from 'styled-components';

export const SCard = styled(Card).attrs(props => ({
  background: props.background ?? 'white',
  borderRadius: '4px',
  p: props.p ?? '12px',
  scrollMarginTop: '20px'
}))``;

export const SHeading = styled(Heading).attrs({
  color: 'black',
  fontWeight: '400',
  fontSize: '26px'
})``;

export const SDivider = styled(Divider).attrs({
  width: '80%',
  borderBottomWidth: '2px',
  my: '16px'
})``;
export const Title = styled(Heading).attrs({
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
export const Blue = styled.span`
  color: #18A0FB
`;
export const Purple = styled.span`
  color: #B9A2EA
`;
export const WideImage = styled(Image).attrs({
  width: '90vw',
  maxWidth: '90vw',
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%, 0)'
})``;
export const SGridCard = styled(SCard).attrs({
  h: '100%',
  w: '100%',
  justifyContent: 'space-between'
})``;
export const PrototypeFrame = styled.iframe.attrs({
  allowFullScreen: true
})``;
