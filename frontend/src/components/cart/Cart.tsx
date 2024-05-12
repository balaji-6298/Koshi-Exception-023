
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, deleteItem } from '../../redux/action';
import { Box, Image, Grid } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { fetchDataFromCart } from '../../utils/cart';

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

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: { data: State }) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());
      try {
        const res = await fetchDataFromCart();
        dispatch(fetchDataSuccess(res));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteItem = (id: string) => {
    
    dispatch(deleteItem(id));
  };

  return (
    <div>
      {loading && (
        <Box padding='6' boxShadow='lg' bg='white' w="full">
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='100' w="full" />
        </Box>
      )}
      {error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>Invalid Data.</AlertDescription>
        </Alert>
      )}
      {data && (
        <ul>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6}>
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
                  </div>
                  <Box w='100%'>
                    
                    <Button
                      colorScheme='red'
                     
                      pl={6}
                      pr={6}
                      onClick={() => handleDeleteItem(item.id)} 
                    >
                      DELETE
                    </Button>
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
