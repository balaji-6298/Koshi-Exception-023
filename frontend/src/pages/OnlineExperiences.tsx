import { Box, Button, } from '@chakra-ui/react';
import React from 'react';

export const OnlineExperiences = () => {
    return (
        <>
            <Box bg='pink' w='136%' p={4} color='black' mt="-80px" height="80px">
                logo Airbnb
                <Button colorScheme='lightGray' variant='ghost' border="none" _hover={{ bg: "gray.100" }} marginLeft="1000px">
                    Airbnb your home
                </Button>
            </Box>
            <h1 style={{ padding: "20px 80px", fontSize: "35px", fontWeight: "600" }}>New this week</h1>

            <Box w='200%' h="360px" p={4} color='white' display="flex" gap={5} marginLeft="60px" borderRadius="10px">
                <Box
                    width="45%"
                    backgroundImage="url('https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    minHeight="30vh"
                    borderRadius="10px"
                >
                    <p style={{ paddingLeft: "20px", marginTop: "20px" }}>Collection</p>
                    <h2 style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "600" }}>Most popular around <br /> the world</h2>
                    <Button colorScheme="gray" mt="4" style={{ marginLeft: "20px", marginTop: "150px" }}>
                        Show all
                    </Button>

                </Box>

                <Box
                    width="45%"
                    backgroundImage="url('https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1200')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    minHeight="30vh"
                    borderRadius="10px"
                >
                    <p style={{ paddingLeft: "20px", marginTop: "20px" }}>Collection</p>
                    <h2 style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "600" }}>Easy for itinerary<br />planning</h2>
                    <Button colorScheme="gray" mt="4" style={{ marginLeft: "20px", marginTop: "150px" }}>
                        Show all
                    </Button>

                </Box>

                <Box
                    width="45%"
                    backgroundImage="url('https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    minHeight="30vh"
                    borderRadius="10px"
                >
                    <p style={{ paddingLeft: "20px", marginTop: "20px" }}>Collection</p>
                    <h2 style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "600" }}>Great for team <br /> building</h2>
                    <Button colorScheme="gray" mt="4" style={{ marginLeft: "20px", marginTop: "150px" }}>
                        Show all
                    </Button>

                </Box>

                <Box
                    width="45%"
                    backgroundImage="url('https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    minHeight="30vh"
                    borderRadius="10px"
                >
                    <p style={{ paddingLeft: "20px", marginTop: "20px" }}>Collection</p>
                    <h2 style={{ paddingLeft: "20px", fontSize: "24px", fontWeight: "600" }}>Fun for the family</h2>
                    <Button colorScheme="gray" mt="4" style={{ marginLeft: "20px", marginTop: "150px" }}>
                        Show all
                    </Button>

                </Box>
              
            </Box>
        </>
    )
};

