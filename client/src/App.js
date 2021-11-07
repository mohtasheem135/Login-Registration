import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Home from './Home/Home';
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
