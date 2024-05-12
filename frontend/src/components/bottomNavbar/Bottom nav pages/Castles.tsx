import React from 'react';
import { useEffect, useState } from 'react'
import {  Castles, categories } from '../Bottom Navbar constants/data';
import { icondata } from '../Bottom Navbar constants/Icons';
import { Box, Image, Badge, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Castless = () => {
  const [obj, setObj] = useState<categories[]>([]);
  const [arr, setArr] = useState<Castles[]>([]);

  useEffect(() => {
    icondata().then((res: categories[]) => {
      setObj(res);
    }).catch((err) => {
      console.error(err);
      throw err;
    })
  }, []);


  useEffect(() => {
    if (obj.length > 0) {
      const pools: Castles[] = obj.flatMap((ele) => ele.Castles);
      setArr(pools);
    }
  }, [obj]);


  return (
    <>
      {arr.map((ele,ind) => {
        return (
          <>
          <div key={ind} >
              <Box key={ele.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                <Image src={ele.image_url} alt="" height={250} width={400} overflow={'hidden'} />

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

                  <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {ele.distance}
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.500">
                      {ele.price}
                    </Text>
                  </Box>
                  
                  <Box height={"20px"} marginLeft={"300px"} marginTop={"-40px"} display={'flex'} gap={"10px"}>
                    <FontAwesomeIcon icon={faCartShopping}  />
                    <FontAwesomeIcon icon={faHeart} />
                  </Box>
                </Box>
              </Box>
              </div>
          </>
        )
      })}
    </>
  )
}
