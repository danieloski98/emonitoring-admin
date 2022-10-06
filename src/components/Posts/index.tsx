import React from 'react'
import { Flex, Text, Box, Avatar } from '@chakra-ui/react'
import { FiThumbsUp, FiMessageSquare, FiShare2 } from 'react-icons/fi'
import { IPost } from '../../models/post'

const Post: React.FC<IPost> = ({ post, username }) => {
  return (
    <Flex width="100%" borderBottomWidth="2px" borderBottomColor="whitesmoke" mb="30px" py="20px">
        <Avatar src="/imgs/avatar.svg" />
        <Flex flex="1"  px="10px" direction="column">
            <Text fontSize="16px" fontWeight="600" color="black">{username}</Text>
            <Text fontSize="12px" fontWeight="500" color="grey" mt="10px">{post}</Text>

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