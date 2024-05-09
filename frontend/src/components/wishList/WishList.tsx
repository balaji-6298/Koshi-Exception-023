



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromAPI } from '../../utils/wishListApi';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../../redux/action';

export const WishList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: any) => state.data);

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} 
      {data && (
        <ul>
          {data.map((item: any) => ( 
            <li key={item.id}>
              <img src={item.url} alt={item.location} />
              <div>
                <h3>{item.location}</h3>
                <p>Type: {item.type}</p>
                <p>Price: {item.price}</p>
                <p>Rating: {item.rating}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



