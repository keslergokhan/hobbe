import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { HomePage } from './pages/home/homePage';
import { RegisterPage } from './pages/register/registerPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
