import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/Dashboard'
import './components/i.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pair from './pages/Pair'
import { Navigate } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/token-address" />} />
          <Route path="/token-address" element={<Dashboard />} />
          <Route path="pair-address" element={<Pair />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
