import React, { useState } from 'react';
import { Box,  Input,  Stack, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Card,
} from '@chakra-ui/react';
import Calendar from 'react-calendar';




export const Stays=() => {

  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBoxClick = () => {
    setShowCalendar(!showCalendar);
  };
 
  const background: string="lightGray"
 
    return(
        <Stack spacing={4} direction='row' align='center' border="2px solid lightGray" height="70px" borderRadius="100px" marginLeft="250px"width="900px">
  <Box as='button' borderRadius='100px' bg="white" fontWeight="500" _hover={{ bg: "gray.100"}} color='black' px={4} h={8} height="65px" width="250px" border="none"  onClick={onOpen}>
  Where
  <Input variant='unstyled' placeholder='Search destinations' ml={20} />

  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent style={{marginTop:"180px ", marginLeft:"-400px"}}>
          <ModalHeader>Search by region</ModalHeader>
          <ModalBody>
            <Text>
              <Stack display="flex" direction='row' flexWrap="wrap" gap={3}>
                  <Box w='125px' _hover={background}>
                  <img src="	https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" alt=""  width='120px'/> 
                  <p style={{paddingBottom:'10px'}}>I'm flexible</p>
                  </Box>
                  <Box w='125px'>
                  <img src="	https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320" alt=""  width='120px'/>
                  <p style={{paddingBottom:'10px'}}>Southeast Asia</p>
                  </Box>
                  <Box w='125px'>
                  <img src="	https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320" alt=""  width='120px'/> 
                  <p style={{paddingBottom:'10px'}}>Thailand</p>
                  </Box>
                  <Box w='125px'>
                  <img src="	https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt=""  width='120px'/> 
                  <p style={{paddingBottom:"25px"}}>Europe</p>
                  </Box>

                  <Box w='125px'>
                  <img src="	https://a0.muscache.com/im/pictures/e1a36727-5064-4ba7-a870-4f9fec72def7.jpg?im_w=320" alt=""  width='120px'/> 
                  <p style={{paddingBottom:"25px"}}>United Arab E...</p>
                  </Box>
                  <Box w='125px'>
                  <img src="	https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320" alt=""  width='120px'/> 
                  <p style={{paddingBottom:"25px"}}>Middle East</p>

                  </Box>
              </Stack>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
</Box>

<Box
        as='button'
        borderRadius='100px'
        bg="white"
        fontWeight="bold"
        _hover={{ bg: "gray.100"}}
        px={4}
        h={8}
        height="65px"
        width="150px"
        border="none"
        onClick={handleBoxClick}
      >
        Check in
        <Input variant='unstyled' placeholder='Add dates' ml={5} />
      </Box>
      {showCalendar && (
        <Card p={6} mt={360} ml={-150} h={250}> {/* Card component */}
          <Calendar />
        </Card>
      )}

<Box as='button' borderRadius='100px' bg="white" fontWeight="bold" _hover={{ bg: "gray.100"}} px={4} h={8}  height="65px" width="150px" border="none">
  Check out
  <Input variant='unstyled' placeholder='Add dates' ml={5} />
</Box>
<Box as='button' borderRadius='100px' bg="white" fontWeight="bold" _hover={{ bg: "gray.100"}} px={4} h={8} height="65px" width="250px" border="none">
  Who
  <Input variant='unstyled' placeholder='Add guests' ml={20} />
</Box>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block ", fill:" none ",height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible"}}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>

</Stack>
    )
};