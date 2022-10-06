import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'
import { FiThumbsUp, FiMessageSquare, FiShare2 } from 'react-icons/fi'

function Post() {
  return (
    <Flex width="100%" borderBottomWidth="2px" borderBottomColor="whitesmoke" mb="30px" py="20px">
        <Box width="40px" height="40px" borderRadius="full" bg="grey"></Box>
        <Flex flex="1"  px="10px" direction="column">
            <Text fontSize="16px" fontWeight="600" color="black">Maureen James</Text>
            <Text fontSize="12px" fontWeight="500" color="grey" mt="10px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nesciunt officiis dolor, quasi facere, aliquam numquam quo voluptatem iusto ipsa saepe dicta maxime harum vel voluptas, excepturi mollitia consequatur. Ex.</Text>

            <Flex align="center" mt="10px">
                <Flex align="center">
                    <FiThumbsUp size={20} color="grey" />
                    <Text fontSize="15px" fontWeight="500" color="grey">30</Text>
                </Flex>

                <Flex align="center" ml="20px">
                    <FiMessageSquare size={20} color="grey" />
                    <Text fontSize="15px" fontWeight="500" color="grey">21</Text>
                </Flex>

                <Flex align="center" ml="20px">
                    <FiShare2 size={20} color="grey" />
                </Flex>
            </Flex>

        </Flex>
    </Flex>
  )
}

export default Post