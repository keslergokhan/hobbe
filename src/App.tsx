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

function App() {
  const [toastList,setToastList] = useState<DefaultToastComponentProp[]>([]);

 


  return (
    <>
      <BaseContext.Provider value={{toastList:toastList,setToastList:setToastList}}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        </Routes>

        <ToastListComponent></ToastListComponent>
      </BaseContext.Provider>
      
      
    </>
  );
}

export default App;
