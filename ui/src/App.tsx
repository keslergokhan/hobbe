import React,{useEffect, useState} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { HomePage } from './pages/home/homePage';
import { RegisterPage } from './pages/register/registerPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseContext } from './context/baseContext';
import { Helpers } from './services/helpersService';
import { DefaultToastComponentProp } from './components/toastComponent/defaultToastComponent';
import { ToastListComponent } from './components/toastComponent/toastListComponent';
import { LoginPage } from './pages/login/loginPage';
import { UserCredential } from 'firebase/auth';
import { LogautPage } from './pages/logautPage';
import { useLoginControl } from './hooks/useLoginControl';
import { MoviePage } from './pages/movie/moviePage';

function App() {
  useLoginControl();
  const [toastList,setToastList] = useState<DefaultToastComponentProp[]>([]);
  const [user,setUser] = useState<UserCredential | null>(null);

  return (
    <>
      <BaseContext.Provider value={{toastList:toastList,setToastList:setToastList,user:user}}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/logaut' element={<LogautPage></LogautPage>}></Route>
          <Route path='/movie' element={<MoviePage></MoviePage>}></Route>
        </Routes>

        <ToastListComponent></ToastListComponent>
      </BaseContext.Provider>
      
    </>
  );
}

export default App;
