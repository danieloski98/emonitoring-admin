import { Flex, Box, Text, Heading, HStack, Image } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import RecentPost from './components/RecentPosts'
import { FiChevronDown } from 'react-icons/fi'
import Impressions from './components/Impressions'
import Trends from './components/Trends'
import Statistics from './components/Statistics'
import PartyStatistics from './components/PartyStats'
import Blocked from './components/Blocked'
import AddPost from './components/addPost'
import React from 'react';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
   <Box width="100vw" height="100vh" p="40px">
    <AddPost isOpen={open} close={() => setOpen(false)} />
    <Flex direction="column" flex="1" width="100%" height="100%" bg="#F7F9FB" borderRadius="20px" shadow="xl" boxShadow="2xl" overflow="hidden" px="40px" pb="20px">
      <Navbar open={() => setOpen(true)} />

      <Flex flex="1">

        <RecentPost />

        <Flex flex="1" direction="column" width="100%" px="20px" overflow="auto">

          {/* SECONDARY HEADER */}
          <Flex width="100%"  height="90px" justify="flex-end" align="center">
            <Flex align="center" width="auto" mr="40px">
              <HStack mr="20px" spacing={1}>
                <Text>All States</Text>
                <FiChevronDown size={25} />
              </HStack>

              <HStack mr="20px" spacing={1}>
                <Text>Region</Text>
                <FiChevronDown size={25} />
              </HStack>

              <HStack spacing={1}>
                <Text>Activities</Text>
                <FiChevronDown size={25} />
              </HStack>
            </Flex>
            <Flex align="center">
              <Text>Admin</Text>
              <Box width="60px" height="60px" borderRadius="full" bg="white" ml="10px">
                <Image src="/imgs/avatar.svg" />
              </Box>
            </Flex>
          </Flex>

          <Flex width="100%" height="270px">
              <Impressions />
              <Trends />
              <Statistics />
          </Flex>

          <Flex width="100%" height="270px" mt="20px">
              <PartyStatistics />
              <Blocked />
              {/* <Statistics /> */}
          </Flex>

        </Flex>

      </Flex>

    </Flex>
   </Box>
  )
}

export default App
