import React from 'react'
import { Flex } from '@chakra-ui/react'
import Post from '../Posts'

function RecentPost() {
  return (
    <Flex width="391px" height="600px" bg="white" p="20px" direction="column" overflow="auto" borderRadius="12px">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </Flex>
  )
}

export default RecentPost