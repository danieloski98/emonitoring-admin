import React from 'react'
import { Flex, Text, Box, VStack, Heading, HStack, Avatar } from '@chakra-ui/react'


function PartyStatistics() {
  return (
    <Flex width="250px" height="full" direction="column" mr="20px">
        <Text fontSize="16px">Party Statistics</Text>
        <Flex direction="column" justify="space-evenly" px="30px" flex="1" width="250px" borderRadius="12px" bg="white" >
            
            <HStack>
                <Avatar src="/imgs/labour.svg" size="sm" />
                <Text>1500 Votes</Text>
            </HStack>
            
            <HStack>
                <Avatar src="/imgs/apga.svg" size="sm" />
                <Text>1200 Votes</Text>
            </HStack>

            <HStack>
                <Avatar src="/imgs/apc.svg" size="sm" />
                <Text>500 Votes</Text>
            </HStack>

            <HStack>
                <Avatar src="/imgs/pdp.svg" size="sm" />
                <Text>800 Votes</Text>
            </HStack>

        </Flex>
    </Flex>
  )
}

export default PartyStatistics