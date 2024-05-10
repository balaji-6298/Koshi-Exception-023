import { Box, Input, Stack } from '@chakra-ui/react';
import React from 'react';

export const Experiences= () => {
    return (
        <Stack spacing={4} direction='row' align='center' border="2px solid lightGray" height="70px" borderRadius="100px" marginLeft="250px"width="900px">
        <Box as='button' borderRadius='100px' bg="white" fontWeight="500" _hover={{ bg: "gray.100"}} color='black' px={4} h={8} height="65px" width="300px" border="none">
        Where
        <Input variant='unstyled' placeholder='Search destinations' ml={20} />
      </Box>
      
      <Box as='button' borderRadius='100px'bg="white" fontWeight="bold" _hover={{ bg: "gray.100"}} px={4} h={8}  height="65px" width="300px" border="none">
       Date
       <Input variant='unstyled' placeholder='Add dates' ml="100px" />
      </Box>
      <Box as='button' borderRadius='100px' bg="white" fontWeight="bold" _hover={{ bg: "gray.100"}} px={4} h={8} height="65px" width="300px" border="none">
        Who
        <Input variant='unstyled' placeholder='Add guests' ml="100px" />
        
      </Box>
      </Stack>
    )
};
