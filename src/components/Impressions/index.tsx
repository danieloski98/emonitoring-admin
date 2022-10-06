import { Flex, Text, Box, VStack, Heading } from '@chakra-ui/react'
import React from 'react'

function Impressions() {
  return (
    <Flex width="250px" height="full" direction="column">
        <Text fontSize="16px">Impressions</Text>
        <Box width="197px" height="64px" bg="white" mt="10px">
            <VStack>
                <Heading fontSize="20px">600,000.00</Heading>
                <Text fontSize="12px" color="grey">TOTAL IMPRESSIONS</Text>
            </VStack>
        </Box>

        <Box width="197px" height="64px" bg="white" mt="20px">
            <VStack>
                <Heading fontSize="20px">5,000.00</Heading>
                <Text fontSize="12px" color="grey">TOTAL LIKES</Text>
            </VStack>
        </Box>

        <Box width="197px" height="64px" bg="white" mt="20px">
            <VStack>
                <Heading fontSize="20px">3,000.00</Heading>
                <Text fontSize="12px" color="grey">TOTAL FEEDS</Text>
            </VStack>
        </Box>
    </Flex>
  )
}

export default Impressions