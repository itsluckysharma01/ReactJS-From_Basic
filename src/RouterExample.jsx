import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './navBar';
import Login from './Login';
import Error from './Error';

const RouterExamples = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterExamples

