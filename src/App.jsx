import { useState } from 'react'
import Button from '@mui/material/Button';

import './App.css'
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './screens/SignIn';

function App() {
 
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element ={<Home/>} />
          <Route exact path='/SignIn' element ={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
