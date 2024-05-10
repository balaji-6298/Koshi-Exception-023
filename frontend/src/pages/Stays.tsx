import React from 'react';
import { Box, Stack } from '@chakra-ui/react'

export const Stays=() => {
    return(
        <Stack spacing={4} direction='row' align='center' border="1px solid lightGray" height="70px" borderRadius="100px" marginLeft="300px">
  <Box as='button' borderRadius='100px' bg='lightGray' color='white' px={4} h={8} height="70px" width="200px">
  Where
</Box>

<Box as='button' borderRadius='100px' bg='lightGray' color='white' px={4} h={8}  height="70px" width="200px">
 Check  in 
</Box>
<Box as='button' borderRadius='100px' bg='lightGray' color='white' px={4} h={8}  height="70px" width="200px">
  Check out
</Box>
<Box as='button' borderRadius='100px' bg='lightGray' color='white' px={4} h={8} height="70px" width="200px">
  Who
</Box>
</Stack>
    )
};