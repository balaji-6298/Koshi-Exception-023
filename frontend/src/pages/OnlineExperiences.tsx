import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import {
  Button,
  Icon,
  Modal,
  ModalContent,
  ModalBody,
  Box,
  Image,
  Badge,
  Text,
} from "@chakra-ui/react";
import { FaBars, FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Footer";
import { icondata } from "../components/bottomNavbar/Bottom Navbar constants/Icons";
import {
  Amazingpool,
  categories,
} from "../components/bottomNavbar/Bottom Navbar constants/data";


export const OnlineExperiences = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onClose = () => setIsOpen(false);

  const [obj, setObj] = useState<categories[]>([]);
  const [arr, setArr] = useState<Amazingpool[]>([]);

 
  useEffect(() => {
    icondata()
      .then((res: categories[]) => {
        setObj(res);
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }, []);

  useEffect(() => {
    if (obj.length > 0) {
      const pools: Amazingpool[] = obj.flatMap((ele) => ele.Amazingpools);
      setArr(pools);
    }
  }, [obj]);

  return (
    <>
      <Box
        border="1px solid lightGray"
        w="106.4%"
        p={4}
        color="black"
        mt="-80px"
        height="90px"
      >
        logo Airbnb
        <Button
          colorScheme="lightGray"
          variant="ghost"
          border="none"
          _hover={{ bg: "gray.100" }}
          marginLeft="900px"
          h="45px"
          borderRadius="25px"
        >
          Airbnb your home
        </Button>
        <Button
          border="none"
          w="80px"
          h="45px"
          borderRadius="30px"
          marginLeft="20px"
          onClick={() => setIsOpen(true)}
        >
          <Icon as={FaBars} marginRight="10px" />
          <Icon as={FaUser} />
        </Button>
       
      </Box>

            
            <h1 style={{ padding: "20px 80px", fontSize: "35px", fontWeight: "600" }}>New this week</h1>

      <Box w="100%" marginLeft="40px">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          emulateTouch={true}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={50}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                display: "block",
                position: "absolute",
                left: "2%",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                fontSize: "40px",
                color: "black",
              }}
            >
              {"<"}
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                display: "block",
                position: "absolute",
                right: "2%",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "1",
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                fontSize: "40px",
                color: "black",
                gap: "10px",
              }}
            >
              {">"}
            </button>
          )}
        >
          <Box
            width="95%"
            backgroundImage="url('https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200')"
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="55vh"
            borderRadius="10px"
          >
            <p
              style={{
                marginLeft: "-476px",
                paddingTop: "35px",
                color: "white",
              }}
            >
              Collection
            </p>
            <h2
              style={{
                marginLeft: "-222px",
                paddingLeft: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Most popular around the world
            </h2>
            <Button
              colorScheme="gray"
              mt="4"
              style={{ marginLeft: "-470px", marginTop: "180px" }}
            >
              Show all
            </Button>
            {/* Content for slide 1 */}
          </Box>

          <Box
            width="95%"
            backgroundImage="url('https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1200')"
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="55vh"
            borderRadius="10px"
          >
            <p
              style={{
                marginLeft: "-476px",
                paddingTop: "35px",
                color: "white",
              }}
            >
              Collection
            </p>
            <h2
              style={{
                marginLeft: "-280px",
                paddingLeft: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Easy for itinerary planning
            </h2>
            <Button
              colorScheme="gray"
              mt="4"
              style={{ marginLeft: "-470px", marginTop: "180px" }}
            >
              Show all
            </Button>
            {/* Content for slide 2 */}
          </Box>

          <Box
            width="95%"
            backgroundImage="url('https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200')"
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="55vh"
            borderRadius="10px"
          >
            <p
              style={{
                marginLeft: "-476px",
                paddingTop: "35px",
                color: "white",
              }}
            >
              Collection
            </p>
            <h2
              style={{
                marginLeft: "-310px",
                paddingLeft: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Great for team building
            </h2>
            <Button
              colorScheme="gray"
              mt="4"
              style={{ marginLeft: "-470px", marginTop: "180px" }}
            >
              Show all
            </Button>
            {/* Content for slide 3 */}
          </Box>

          <Box
            width="95%"
            backgroundImage="url('https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200')"
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="55vh"
            borderRadius="10px"
          >
            <p
              style={{
                marginLeft: "-476px",
                paddingTop: "35px",
                color: "white",
              }}
            >
              Collection
            </p>
            <h2
              style={{
                marginLeft: "-380px",
                paddingLeft: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Fun for the family
            </h2>
            <Button
              colorScheme="gray"
              mt="4"
              style={{ marginLeft: "-470px", marginTop: "180px" }}
            >
              Show all
            </Button>
            {/* Content for slide 4 */}
          </Box>
        </Carousel>
      </Box>

      <Box display="flex" marginLeft="40px" marginTop="20px" gap="5px">
        <Box w="400px">
          <Button
            border="1px solid lightGray"
            borderRadius="20px"
            bg="none"
            marginRight="10px"
          >
            Dates
          </Button>
          <Button
            border="1px solid lightGray"
            borderRadius="20px"
            bg="none"
            marginRight="10px"
          >
            Group size
          </Button>
          <Button border="1px solid lightGray" borderRadius="20px" bg="none">
            More filters
          </Button>
        </Box>
        <p
          style={{
            fontSize: "35px",
            color: "Gray",
            marginTop: "-10px",
            marginLeft: "-60px",
          }}
        >
          |
        </p>
        <Box width="900px" marginLeft="-5px">
          <Carousel>
            <div
              className="d-flex "
              style={{ marginLeft: "25px", gap: "20px" }}
            >
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Great for groups
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Family-friendly
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Animals
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Arts & writing
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Baking
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Cooking
              </Button>
            </div>

            <div
              className="d-flex "
              style={{ marginLeft: "25px", gap: "20px" }}
            >
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                Dance
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                Drinks
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                Entertainment
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                fitness
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                History & culture
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                Magic
              </Button>
              <Button
                variant="primary"
                bg="lightGray"
                className="carousel-button"
                borderRadius="20px"
                border="none"
              >
                Music
              </Button>
            </div>
            <div
              className="d-flex "
              style={{ marginLeft: "25px", gap: "20px" }}
            >
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Social impact
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Wellness
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Olympians & Paralympians
              </Button>
              <Button
                variant="primary"
                className="carousel-button"
                bg="lightGray"
                borderRadius="20px"
                border="none"
              >
                Designed for accessibility
              </Button>
            </div>
          </Carousel>
        </Box>
      </Box>

      {/* ********************* */}

            <h3 style={{ marginLeft: "40px" ,marginTop:"20px" }}>Plan a trip with help from local Hosts around the world</h3>



            <Box width="1300px" marginLeft="40px" gap={"40px"} display={"flex"} flexWrap={"wrap"} marginTop={"20px"}>
{/* 
                <Carousel > */}
                    {arr.map((ele, ind) => {
                        return (
                            <div key={ind} >
                                <Box key={ele.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                                    <Image src={ele.image_link} alt="" />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {ele.location}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.distance}
                    </Box>

                                        <Box>
                                            <Text fontSize="sm" color="gray.500">
                                                {ele.price_per_night}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        )
                    })}
                {/* </Carousel> */}

            </Box>

{/* 2nd */}
            <h3 style={{ marginLeft: "40px" ,marginTop:"20px" }}>Top sellers</h3>

            <Box width="1300px" marginLeft="40px" gap={"40px"} display={"flex"} flexWrap={"wrap"} marginTop={"20px"} >
{/* 
                <Carousel > */}
                    {arr.map((ele, ind) => {
                        return (
                            <div key={ind} >
                                <Box key={ele.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                                    <Image src={ele.image_link} alt="" />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {ele.location}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.distance}
                    </Box>

                                        <Box>
                                            <Text fontSize="sm" color="gray.500">
                                                {ele.price_per_night}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        )
                    })}
                {/* </Carousel> */}

            </Box>

      {/* 3rd */}

<h3 style={{ marginLeft: "40px" ,marginTop:"20px" }}>Great for groups</h3>

<Box width="1300px" marginLeft="40px" gap={"40px"} display={"flex"} flexWrap={"wrap"} marginTop={"20px"} >
{/* 
                <Carousel > */}
                    {arr.map((ele, ind) => {
                        return (
                            <div key={ind} >
                                <Box key={ele.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                                    <Image src={ele.image_link} alt="" />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {ele.location}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.distance}
                    </Box>

                                        <Box>
                                            <Text fontSize="sm" color="gray.500">
                                                {ele.price_per_night}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        )
                    })}
                {/* </Carousel> */}

            </Box>

      {/* 4th */}

            <h3 style={{ marginLeft: "40px" ,marginTop:"20px" }}>Make plans this weekend</h3>

            <Box width="1300px" marginLeft="40px" gap={"40px"} display={"flex"} flexWrap={"wrap"} marginTop={"20px"}  marginBottom={"40px"}>
{/* 
                <Carousel > */}
                    {arr.map((ele, ind) => {
                        return (
                            <div key={ind} >
                                <Box key={ele.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                                    <Image src={ele.image_link} alt="" />

                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {ele.location}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.distance}
                    </Box>

                                        <Box>
                                            <Text fontSize="sm" color="gray.500">
                                                {ele.price_per_night}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        )
                    })}
                {/* </Carousel> */}

            </Box>
            {/* <Footer /> */}
        </>
    )
};
