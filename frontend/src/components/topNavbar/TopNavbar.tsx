import { Box, Button, Link as ChakraLink, Flex, Icon, Modal, ModalBody, ModalContent } from '@chakra-ui/react';
import { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';


import { Link } from 'react-router-dom';


export const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <>

      <Box bg="white.800" p={3} ml={400}  height="80px" border="none" width="900px" display={"flex"} >

        <Flex justify="space-around" align="center" gap="20px" mt="15px">
          <ChakraLink as={Link} to="/" color="gray.500" fontWeight="bold" _hover={{ color: "black" }}>
            Stays
          </ChakraLink>
          <ChakraLink as={Link} to="/experiences" color="gray.500" fontWeight="bold" _hover={{ color: "black" }}>
            Experiences
          </ChakraLink>
          <ChakraLink as={Link} to="/online-experiences" color="gray.500" fontWeight="bold" _hover={{ color: "black" }}>
            Online Experiences
          </ChakraLink>





        </Flex>

        <Button
          border="none"
          w="80px"
          h="45px"
          borderRadius="30px"
          marginLeft="450px"
          onClick={() => setIsOpen(true)}
        >
          <Icon as={FaBars} marginRight="10px" />
          <Icon as={FaUser} />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent marginLeft="1100px" marginTop="80px" w="200px" border="1px solid lightGray" padding="10px">
            <ModalBody>
              <Button border="none" bg="none" marginBottom="20px">Sign up</Button>
              <br />

              <Button border="none" bg="none" padding="2px 20px">Log in</Button>
              <br />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );

};
