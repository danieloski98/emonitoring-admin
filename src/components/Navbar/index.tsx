import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'

function Navbar({open}: any) {
  return (
    <Flex width="100%" height="70px" justify="space-between" align="center">
        <Text>EMONITORING SYSTEM</Text>
        <Button onClick={() => open()} bg="#1713BA" width="174px" height="50px" color="white" fontSize="sm" borderRadius="full" >Post as User</Button>
    </Flex>
  )
}

export default Navbar