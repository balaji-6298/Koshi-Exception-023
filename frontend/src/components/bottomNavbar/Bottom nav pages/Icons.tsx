import { Box, Image, Grid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';


import axios from 'axios';
import { useEffect, useState } from 'react';

interface AirbnbCardProps {
  id: string;
  url: string;
  location: string;
  type: string;
  price: string;
  rating: number;
}

export const Icondata: React.FC = () => {
  const [arr, setArr] = useState<AirbnbCardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://koshi-exception-023-3.onrender.com/newData");
        setArr(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);



  return (
    <>
      <div>
        {arr && (
          <ul>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6}>
              {arr.map((item: AirbnbCardProps) => (
                <li key={item.id}>
                  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={3} mb={3}>
                    {item.url ? (
                      <Image src={item.url} alt={item.location} />
                    ) : (
                      <div>No Image Available</div>
                    )}
                    <div>
                      <h3>{item.location}</h3>
                      <p>Type: {item.type}</p>
                      <p>Price: {item.price}</p>
                      <Box display='flex' mt='2' alignItems='center'>
                        {Array(5).fill('').map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < item.rating ? 'teal.500' : 'gray.300'}
                          />
                        ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                          Rating: {item.rating}
                        </Box>
                      </Box>

                      <Box marginLeft={"240px"} marginTop={"-20px"} display={'flex'} gap={"10px"}>
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faCartPlus} />
                      </Box>
                       
                    </div>

                  </Box>
                </li>
              ))}
            </Grid>
          </ul>
        )}
      </div>

    </>
  );
};
