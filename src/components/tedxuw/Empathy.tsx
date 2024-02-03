import React, { type FC } from 'react';
import {
  Box, HStack,
  Image, ListItem,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList, VStack
} from '@chakra-ui/react';
import styled from 'styled-components';

import bulletImg from '../../images/bullet.svg';
import folder from '../../images/folder.svg';
import jordan from '../../images/jordan.png';
import {
  SCard, SDivider, SideHeading, BodyText,
  Pink, SectionHeading, Title
} from '../../styles/components';
import '../../styles/styles.css';

const data = [

];

const Empathy: FC = () => {
  return (
    <Box alignItems='start'>
      <HStack mb='20px' alignItems='center' gap='12px'>
        <Image src={folder} width='36px' mb='10px' />
        <Title> Empathy Through Research</Title>
      </HStack>

      <SectionHeading mb='12px'>Audit Summary</SectionHeading>
      <BodyText>
        {/* eslint-disable-next-line max-len */}
        After receiving the branding system and graphics from the branding team, we jumped into research to get an idea of how we wanted to envision the TEDxUW website based on previous TEDx events and other events to make sure we bring something exciting and new to the table.
      </BodyText>

      <SCard>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </SCard>
    </Box>
  );
};

export default Empathy;
