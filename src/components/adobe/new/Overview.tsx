import React, { type FC } from 'react';
import {
  HStack, Image, Text, VStack
} from '@chakra-ui/react';

import '../../../styles/styles.css';

import adobeRole from '../../../images/new/adobe-role.png';
import adobeScope from '../../../images/new/adobe-scope.png';
import linkImage from '../../../images/new/link.svg';

import SectionHeaderCard from '../../shared/SectionHeaderCard';
import { SCard } from '../../../styles/components';
import { AdobeHeading } from '../../shared';
import CustomTag from '../../shared/CustomTag';
import LinkButton from '../../shared/LinkButton';

interface TProps {
  scrollRef: React.RefObject<HTMLDivElement>
}

const Overview: FC<TProps> = ({ scrollRef }) => {
  return (
    <VStack
    w='100%'
    align='start'
    justifyContent='space-between'
    gap='20px'
  >
    <SectionHeaderCard title='Overview' scrollRef={scrollRef} />
    <SCard w='100%' p='16px' gap='12px'>
      <AdobeHeading>How we achieved +500% Adobe credentialed in 3 Quarters</AdobeHeading>
      <Text>
        When you hear “Adobe”, your first thought may be Photoshop, the Creative Cloud products, or Adobe Acrobat.
        <br /><br />
        Yet, Adobe has 15 business analytic products under Experience Cloud.
        It&apos;s hard to care when it&apos;s frustrating and “nearly impossible” to self-learn these complex tools.
        <br /><br />
        To make the learning path enjoyable and clear for users,
        I led the end-to-end conception of the web experience for the Certification Learning Portal.
      </Text>
      <HStack justifyContent='space-between'>
        <HStack gap='12px'>
          <CustomTag tag="Product Design" />
          <CustomTag tag="UXR" />
        </HStack>
        <LinkButton href={'/'} image={linkImage} />
      </HStack>
    </SCard>
    <HStack w='100%'>
      <SCard w='100%' p='16px' gap='12px' alignSelf='stretch' justifyContent='space-between'>
        <Text color='black' fontSize='16px'>My Role Within the Team</Text>
        <Image src={adobeRole} />
        <HStack>
          <CustomTag tag="Lead Product Designer" />
          <CustomTag tag="Adobe Credentialing Team" />
        </HStack>
      </SCard>
      <SCard w='100%' p='16px' gap='12px' alignSelf='stretch' justifyContent='space-between'>
        <Text color='black' fontSize='16px'>Scope</Text>
        <Image mx='40px' src={adobeScope} />
        <div />
      </SCard>
    </HStack>
  </VStack>
  );
};

export default Overview;
