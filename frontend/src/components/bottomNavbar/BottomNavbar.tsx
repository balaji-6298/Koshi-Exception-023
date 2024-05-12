
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Amazingpools } from './Bottom nav pages/Amazingpools'
import { Amazingviews } from './Bottom nav pages/Amazingview'
import { Beach } from './Bottom nav pages/Beach'
import { Castless } from './Bottom nav pages/Castles'
import { Countrysides } from './Bottom nav pages/Countryside'
import { Desert } from './Bottom nav pages/Desert'
import { Farmss } from './Bottom nav pages/Farms'
import { Historicalhomess } from './Bottom nav pages/Historicalhomes'
import { Island } from './Bottom nav pages/Island'
import { Luxee } from './Bottom nav pages/Luxe'
import { Omg } from './Bottom nav pages/Omg'
import { Treehouse } from './Bottom nav pages/Treehouse'
import { Box } from '@chakra-ui/react';
import { Icondata } from './Bottom nav pages/Icons';
import WishList from '../wishList/WishList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Cart } from '../cart/Cart';

export const BottomNavbar = () => {
  return (
    <>
      <Box bg='#C4F1F9' w='100%' p={4} mt={4} mb={4} color='#171923' display={'flex'} justifyContent={'space-between'}>

        <Link to="/"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" alt="" />
          <p>Icons</p>
        </div></Link>

        <Link to="/Amazingpools"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" />
          <p>Amazingpools</p>
        </div></Link>

        <Link to="/Amazingviews"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" />
          <p>Amazingview</p>
        </div></Link>

        <Link to="/Beach"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" />
          <p>Beach</p>
        </div></Link>

        <Link to="/Castles"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" />
          <p>Castles</p>
        </div></Link>

        <Link to="/Countryside"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" />
          <p>Countryside</p>
        </div></Link>

        <Link to="/Desert"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg" alt="" />
          <p>Desert</p>
        </div></Link>

        <Link to="Farms"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" />
          <p>Farms</p>
        </div></Link>

        <Link to="Historicalhomes"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" alt="" />
          <p>Historicalhomes</p>
        </div></Link>

        <Link to="/Island"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" />
          <p>Island</p>
        </div></Link>

        <Link to="/Luxe"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" />
          <p>Luxe</p>
        </div></Link>

        <Link to="/Omg"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" />
          <p>Omg</p>
        </div></Link>

        <Link to="/Treehouse"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <img style={{width:"20px"}} src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" alt="" />
          <p>Treehouse</p>
        </div></Link>

        <Link to="/WishList"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
          <FontAwesomeIcon icon={faHeart} />
          <p>WishList</p>
        </div></Link>

        <Link to="/Cart"><div style={{display:"flex",flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
        <FontAwesomeIcon icon={faCartPlus} />
          <p>Cart</p>
        </div></Link>
      </Box>

       
          <Routes>
            <Route path='/' element={< Icondata/>} />
            <Route path='/Amazingpools' element={<Amazingpools />} />
            <Route path='/Amazingviews' element={<Amazingviews />} />
            <Route path='/Beach' element={<Beach />} />
            <Route path='/Castles' element={<Castless />} />
            <Route path='/Countryside' element={<Countrysides />} />
            <Route path='/Desert' element={<Desert />} />
            <Route path='/Farms' element={<Farmss />} />
            <Route path='/Historicalhomes' element={<Historicalhomess />} />
            <Route path='/Island' element={<Island />} />
            <Route path='/Luxe' element={<Luxee />} />
            <Route path='/Omg' element={<Omg />} />
            <Route path='/Treehouse' element={<Treehouse />} />
            <Route path='/WishList' element={<WishList />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        
    </>
  )
}
