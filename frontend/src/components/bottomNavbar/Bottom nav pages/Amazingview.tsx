import { useEffect, useState } from 'react'
import { Amazingview, categories } from '../Bottom Navbar constants/data';
import { icondata } from '../Bottom Navbar constants/Icons';
import { Box, Image, Badge, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const Amazingviews = () => {
  const [obj, setObj] = useState<categories[]>([]);
  const [arr, setArr] = useState<Amazingview[]>([]);

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
      const pools: Amazingview[] = obj.flatMap((ele) => ele.Amazingview);
      setArr(pools);
    }
  }, [obj]);


  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "30px" }}>

      {arr.map((ele) => {
        return (
          <>
            <div key={ele.id} >
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={ele.src} alt="" />

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
                    {ele.details}
                  </Box>

                  <Box>
                    <Text fontSize="sm" color="gray.500">
                      {ele.price}
                    </Text>
                  </Box>
                  <Box marginLeft={"300px"} marginTop={"-20px"} display={'flex'} gap={"10px"}>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faCartPlus} />
                  </Box>
                </Box>
              </Box>
            </div>
          </>
        )
      })}
          </div>
          </div>
    </>
  )
}
