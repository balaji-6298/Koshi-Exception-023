// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import WishList from './WishList';


interface HeartIconProps {
  data: any; 
}

const HeartIcon: React.FC<HeartIconProps> = ({ data }) => {
  
  // const [showWishList, setShowWishList] = useState(false); 
  const handleHeartClick = async () => {
    try {
      await axios.post('https://koshi-exception-023-1.onrender.com/wishlist', data);
      alert('Added to wishlist!');
      // setShowWishList(true);
     
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <div onClick={handleHeartClick}>
      <FontAwesomeIcon icon={faHeart} />
      {/* {showWishList && <WishList />} */}
    </div>
  );
};

export default HeartIcon;
