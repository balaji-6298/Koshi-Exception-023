import { Box, Input, Button, Heading, Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { usersUrl } from "../../utils/server";
import { useNavigate } from "react-router-dom";
interface UserData {
  u_name: string;
  email: string;
  password: string;
}
export function SignUp() {
  const [userData, setUserData] = useState<UserData>({
    u_name: "",
    email: "",
    password: "",
  });
  const [passBox, setPassBox] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialChar: false,
  });

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({
      ...userData,
      [name]: value,
    });

    // Validate password criteria
    if (name === "password") {
      setPassBox(true);
      setPasswordValid({
        length: value.length >= 8,
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        numbers: /\d/.test(value),
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      passwordValid.length &&
      passwordValid.lowercase &&
      passwordValid.numbers &&
      passwordValid.uppercase &&
      passwordValid.specialChar
    ) {
      axios
        .post(usersUrl, userData)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please enter valid credential");
    }
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
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={userData.password}
            />

            {passBox && (
              <div style={{ paddingBottom: "20px" }}>
                <Flex alignItems="center" h="30px">
                  {passwordValid.length ? (
                    <FaRegCircleCheck style={{ color: "green" }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: "red" }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.length ? "green" : "red",
                      paddingLeft: "2%",
                    }}
                  >
                    Minimum 8 characters
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.lowercase ? (
                    <FaRegCircleCheck style={{ color: "green" }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: "red" }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.lowercase ? "green" : "red",
                      paddingLeft: "2%",
                    }}
                  >
                    At least one lowercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.uppercase ? (
                    <FaRegCircleCheck style={{ color: "green" }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: "red" }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.uppercase ? "green" : "red",
                      paddingLeft: "2%",
                    }}
                  >
                    At least one uppercase letter
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.numbers ? (
                    <FaRegCircleCheck style={{ color: "green" }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: "red" }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.numbers ? "green" : "red",
                      paddingLeft: "2%",
                    }}
                  >
                    At least one number
                  </p>
                </Flex>
                <Flex alignItems="center" h="30px">
                  {passwordValid.specialChar ? (
                    <FaRegCircleCheck style={{ color: "green" }} />
                  ) : (
                    <FaRegTimesCircle style={{ color: "red" }} />
                  )}
                  <p
                    style={{
                      color: passwordValid.specialChar ? "green" : "red",
                      paddingLeft: "2%",
                    }}
                  >
                    At least one special character
                  </p>
                </Flex>
              </div>
            )}
            <Button type="submit" colorScheme="blue" width="full">
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Center>
  );
}




