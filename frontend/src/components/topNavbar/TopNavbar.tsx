import { Box, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const TopNavbar = () => {
  return (
   
    <Box bg="white.800" p={3} ml={400} border="1px solid" height="80px" width="600px"  >
        
      <Flex justify="space-around" align="center" gap="20px" mt="15px">
        <ChakraLink as={Link} to="/" color="gray.500" fontWeight="bold" _hover={{ color: "black"}}>
          Stays
        </ChakraLink>
        <ChakraLink as={Link} to="/experiences" color="gray.500" fontWeight="bold" _hover={{ color: "black"}}>
          Experiences
        </ChakraLink>
        <ChakraLink as={Link} to="/online-experiences" color="gray.500" fontWeight="bold" _hover={{ color: "black" }}>
          Online Experiences
        </ChakraLink>
      </Flex>
    </Box>
  );
};
