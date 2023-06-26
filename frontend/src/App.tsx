import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Neurosity } from "@neurosity/sdk";
import './App.css'
import Login from './components/Login';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar } from '@mui/material';
import AboutPage from './components/AboutPage';
import Login2 from './components/Login';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {

  return (
      <Router>
    <Routes>
      <Route path="/" element={<AboutPage/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Login" element={<Login2 />} />
      <Route path="/Demo" element={<AboutPage />} />
      <Route path="/Research" element={<AboutPage/>} />
    </Routes>
  </Router>
      
  )
}

export default App
