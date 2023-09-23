import { useEffect } from 'react';

import './App.css';
import { Routes, Route } from 'react-router';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/about.component';



const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home /> } />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;
