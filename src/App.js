import { useEffect } from 'react';

import './App.css';
import { Routes, Route } from 'react-router';
import Home from './routes/home/home.component';

import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Post from './routes/post/post.component';
import SignIn from './routes/sign-in/sign-in.component';


const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home /> } />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='post' element={<Post />} />
          <Route path='auth' element={<SignIn />} />
        </Route>
      </Routes>
  );
}

export default App;
