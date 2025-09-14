import { useState } from 'react';
import HomePage from './components/HomePage.tsx';
import Shopping from './components/Shopping.tsx';
import InStock from './components/InStock.tsx';
import Recipe from './components/Recipe.tsx';

import logo from './assets/logo.png'
import Button from '@mui/material/Button'
import { Home, ShoppingBag, FormatListBulleted, Article } from '@mui/icons-material';

export default function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <div className="bg-background h-screen flex flex-col items-center p-5 gap-5">
      <img src={logo} alt="Logo" className='w-2/3' />
      <div className='bg-white w-full flex-1 rounded-4xl p-5 overflow-y-scroll'>
        {selectedPage === 0 && <HomePage />}
        {selectedPage === 1 && <Shopping />}
        {selectedPage === 2 && <InStock />}
        {selectedPage === 3 && <Recipe />}
      </div>
      <nav className='w-full flex justify-around'>
        <Button variant="contained" color="primary" onClick={() => setSelectedPage(0)}>
          <Home />
        </Button>
        <Button variant="contained" color="primary" onClick={() => setSelectedPage(1)}>
          <ShoppingBag />
        </Button>
        <Button variant="contained" color="primary" onClick={() => setSelectedPage(2)}>
          <FormatListBulleted />
        </Button>
        <Button variant="contained" color="primary" onClick={() => setSelectedPage(3)}>
          <Article />
        </Button>
      </nav>
    </div>
  )
}