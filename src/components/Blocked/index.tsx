import React from 'react'
import { Flex, Text, Box, VStack, Heading } from '@chakra-ui/react'

function Blocked() {
  return (
    <Flex width="250px" height="full" direction="column" mr="20px">
        <Text fontSize="16px">Flagged Users</Text>
        <Flex direction="column" justify="space-evenly" px="30px" flex="1" width="250px" borderRadius="12px" bg="white" >
            <Text>@MaureenJames</Text>
            <Text>@FabianHarry</Text>
            <Text>@Tonyeode</Text>
            <Text>@AdeTunde</Text>
            <Text>@PhilipOjo</Text>
            <Text>@Bodefile</Text>
        </Flex>
    </Flex>
  )
}

export default Blocked