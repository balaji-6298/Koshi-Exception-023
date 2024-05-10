import { Center, Box, Heading, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { usersUrl } from "../../utils/server";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", pass: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };


const checkAuthenticUser = (data: any[]) => {
    return data.find((element: any) => element.email === userData.email && element.password === userData.pass);
};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .get(usersUrl)
      .then((res) => {
        const user = checkAuthenticUser(res.data);
        if (user) {
          console.log("User is valid:", user);
          navigate("/dashboard");//need to change
        } else {
          console.log("Invalid credentials");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {" "}
      <Center h="100vh" w="100vw">
        <Box maxW="md" mx="auto" mt="8">
          <Heading as="h1" mb="4" textAlign="center" size="lg">
            Login
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
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Center>
    </>
  );
}
