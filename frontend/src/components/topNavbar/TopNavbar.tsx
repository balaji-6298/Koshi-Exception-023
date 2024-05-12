import {
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClose = () => setIsOpen(false);
  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    var keyExists = localStorage.getItem("user_id") !== null;
    if (keyExists) {
      localStorage.removeItem("user_id");
      navigate("/");
    } else {
      localStorage.removeItem("admin");
      navigate("/");
    }
  };
  return (
    <>
      <Box
        bg="white.800"
        p={3}
        ml={400}
        height="80px"
        border="none"
        width="900px"
        display={"flex"}
      >
        <Flex justify="space-around" align="center" gap="20px" mt="15px">
          <ChakraLink
            as={Link}
            to="/"
            color="gray.500"
            fontWeight="bold"
            _hover={{ color: "black" }}
          >
            Stays
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/experiences"
            color="gray.500"
            fontWeight="bold"
            _hover={{ color: "black" }}
          >
            Experiences
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/online-experiences"
            color="gray.500"
            fontWeight="bold"
            _hover={{ color: "black" }}
          >
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
          <ModalContent
            marginLeft="1100px"
            marginTop="80px"
            w="200px"
            border="1px solid lightGray"
            padding="10px"
          >
            <ModalBody>
              <Button
                border="none"
                bg="none"
                marginBottom="20px"
                onClick={handleSignUp}
              >
                Sign up
              </Button>
              <br />

              <Button
                border="none"
                bg="none"
                padding="2px 20px"
                onClick={handleLogin}
              >
                Log in
              </Button>
              <br />

              <Button
                border="none"
                bg="none"
                marginTop="10px"
                padding="2px 20px"
                onClick={handleLogOut}
              >
                Log out
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
