
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Icons } from './Bottom nav pages/Icons'
import { Amazingpools } from './Bottom nav pages/Amazingpools'
import { Amazingview } from './Bottom nav pages/Amazingview'
import { Beach } from './Bottom nav pages/Beach'
import { Castles } from './Bottom nav pages/Castles'
import { Countryside } from './Bottom nav pages/Countryside'
import { Desert } from './Bottom nav pages/Desert'
import { Farms } from './Bottom nav pages/Farms'
import { Historicalhomes } from './Bottom nav pages/Historicalhomes'
import { Island } from './Bottom nav pages/Island'
import { Luxe } from './Bottom nav pages/Luxe'
import { Omg } from './Bottom nav pages/Omg'
import { Treehouse } from './Bottom nav pages/Treehouse'

export const BottomNavbar = () => {
  return (
    <>
      <Link to="/Icons">Icons</Link>
      <Link to="/Amazingpools">Amazingpools</Link>
      <Link to="/Amazingview">Amazingview</Link>
      <Link to="/Beach">Beach</Link>
      <Link to="/Castles">Castles</Link>
      <Link to="/Countryside">Countryside</Link>
      <Link to="/Desert">Desert</Link>
      <Link to="Farms">Farms</Link>
      <Link to="Historicalhomes">Historicalhomes</Link>
      <Link to="/Island">Island</Link>
      <Link to="/Luxe">Luxe</Link>
      <Link to="/Omg">Omg</Link>
      <Link to="/Treehouse">Treehouse</Link>
      <Routes>
        <Route path='/Icons' element={<Icons />} />
        <Route path='/Amazingpools' element={<Amazingpools />} />
        <Route path='/Amazingview' element={<Amazingview />} />
        <Route path='/Beach' element={<Beach />} />
        <Route path='/Castles' element={<Castles />} />
        <Route path='/Countryside' element={<Countryside />} />
        <Route path='/Desert' element={<Desert />} />
        <Route path='/Farms' element={<Farms />} />
        <Route path='/Historicalhomes' element={<Historicalhomes />} />
        <Route path='/Island' element={<Island />} />
        <Route path='/Luxe' element={<Luxe />} />
        <Route path='/Omg' element={<Omg />} />
        <Route path='/Treehouse' element={<Treehouse />} />
      </Routes>
    </>
  )
}
