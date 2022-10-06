import React from 'react'
import { Flex, Text, Box, VStack, Heading } from '@chakra-ui/react'


function Trends() {
  return (
    <Flex width="250px" height="full" direction="column" mr="20px">
        <Text fontSize="16px">Trends</Text>
        <Flex direction="column" justify="space-evenly" px="30px" flex="1" width="250px" borderRadius="12px" bg="white" >
            <Text>#ApcIsLeadingInMyUnit</Text>
            <Text>#PdpIsLeading</Text>
            <Text>#VoteNNotFight</Text>
            <Text>#VoteLabourParty</Text>
            <Text>#VotePdP</Text>
            <Text>#VoteApc</Text>
        </Flex>
    </Flex>
  )
}

export default Trends