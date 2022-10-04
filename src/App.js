import React from 'react';
import Search from './Search';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleIcon from '@mui/icons-material/People';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
// import CoPresentIcon from '@mui/icons-material/CoPresent';
import Login from './Login';


function App() {
  return (
    <>
    
    <BrowserRouter>
    
     <Routes>
      <Route path='/' element={<Search />}></Route>
     <Route path='/login' element={<Login />}></Route>
     </Routes>
    
    </BrowserRouter>

      </>
  );
}


export default App;
