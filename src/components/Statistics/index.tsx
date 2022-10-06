import React from 'react'
import { Flex, Text, Box, VStack, Heading, HStack } from '@chakra-ui/react'


function Statistics() {
  return (
    <Flex width="250px" height="full" direction="column">
        <Text fontSize="16px">Statistics</Text>
        <Flex direction="column" justify="space-evenly" px="20px" py="30px" flex="1" width="250px" borderRadius="12px" bg="white" >

            <HStack justify="space-between">
                <VStack align="flex-start">
                    <Text fontSize="12px" color="grey">TOTAL POSTS</Text>
                    <Heading fontSize="16px">40</Heading>
                </VStack>

                <VStack align="flex-start">
                    <Text fontSize="14px" color="grey">TOTAL USERS</Text>
                    <Heading fontSize="18px">4000</Heading>
                </VStack>
            </HStack>

            <HStack justify="space-between">
                <VStack align="flex-start">
                    <Text fontSize="12px" color="grey">TOTAL FEEDS</Text>
                    <Heading fontSize="16px">40</Heading>
                </VStack>

                <VStack align="flex-start">
                    <Text fontSize="14px" color="grey">TOTAL LIKES</Text>
                    <Heading fontSize="18px">4000</Heading>
                </VStack>
            </HStack>

        </Flex>
    </Flex>
  )
}

export default Statistics