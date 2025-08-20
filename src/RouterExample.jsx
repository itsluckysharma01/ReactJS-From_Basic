import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterExample = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>About</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterExample
