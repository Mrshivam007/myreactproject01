import React from 'react';
import Search from './Search';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
// import CoPresentIcon from '@mui/icons-material/CoPresent';



function App() {
  return (
    <>
    
    <BrowserRouter>
      <Search />
    <Routes>
           
    </Routes>
  </BrowserRouter>

      </>
  );
}


export default App;
