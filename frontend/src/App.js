import React from 'react';
import Login from './pages/Login.jsx';
import Home from './pages/home.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './pages/Register.jsx';
import './index.css';
import { UserData } from './context/User.jsx';
import Loading from './components/Loading.jsx';


function App() {
  const{loading ,user,isAuth} = UserData
  return <>
  {loading?(
    <Loading />
  ):(
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={isAuth?<Home/>:<Login/>}/>
  <Route path='/register' element={isAuth?<Home/>:<Register/>}/>
</Routes>
</BrowserRouter>
  )}


  </>
}

export default App;
