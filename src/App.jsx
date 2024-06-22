import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Ensure the casing matches the file name
import Addchannel from './components/Addchannel';
import Mainpage from './mainpage';
import Login from './loginPage';
import './App.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/getstarted' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/addchannel' element={<Addchannel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
