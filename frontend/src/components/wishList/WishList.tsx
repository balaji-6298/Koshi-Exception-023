import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromAPI } from '../../utils/wishListApi';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../redux/action';
import { Box, Image, Grid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import {  SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


interface Item {
  id: string;
  url: string;
  location: string;
  type: string;
  price: number;
  rating: number;
}

interface State {
  loading: boolean;
  error: Error | null;
  data: Item[] | null;
}

export const WishList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: { data: State }) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());
      try {
        const res = await fetchDataFromAPI();
        dispatch(fetchDataSuccess(res));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading && <p>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='100' />
        </Box></p>}
      {error && <p><Alert status='error'>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Invalid Data.</AlertDescription>
      </Alert></p>}
      {data && (
        <ul>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>

          {data.map((item: Item) => (
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
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < item.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      Rating: {item.rating}
                    </Box>
                  </Box>
                </div>
                <Box w='100%'  >
                  <Button colorScheme='gray' >ADD TO CART</Button>
                  <Button colorScheme='red' ml={10} pl={6} pr={6}>DELETE</Button>

                </Box>

              </Box>



            </li>
          ))}
        </Grid>
        </ul>
      )}
    </div>
  );
};
