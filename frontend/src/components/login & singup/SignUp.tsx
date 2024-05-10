import { Box, Input, Button, Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

import { usersUrl } from "../../utils/server";
import { useNavigate } from "react-router-dom";
export function SignUp() {
  const [userData, setUserData] = useState({ u_name: "", email: "", pass: "" });

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(usersUrl, userData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      }) 
      .catch((error) => console.log(error));
  };

  return (
    <Center h="100vh" w="100vw">
      <Box maxW="md" mx="auto" mt="8">
        <Heading as="h1" mb="4" textAlign="center" size="lg">
          Sign Up
        </Heading>
        <Box
          bg="white"
          p="8"
          rounded="lg"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
        >
          <form onSubmit={handleSubmit}>
            <Input
              mb="4"
              name="u_name"
              placeholder="Username"
              onChange={handleChange}
              value={userData.u_name}
            />
            <Input
              mb="4"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={userData.email}
            />
            <Input
              mb="4"
              name="pass"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.pass}
            />
            <Button type="submit" colorScheme="blue" width="full">
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Center>
  );
}


