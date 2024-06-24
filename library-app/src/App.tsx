import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './redux/ReduxStore';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css'
import LayoutPage from './pages/LayoutPage/LayoutPage';
import HomePage from './pages/Homepage/HomePage';
import { AppDispatch } from './redux/ReduxStore';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/slices/AuthenticationSlice';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';

function App() {
  const loggedInUser=useSelector((state:RootState)=>state.authentication.loggedInUser); 
  const dispatch:AppDispatch=useDispatch();

  useEffect(()=>{
    let userId=localStorage.getItem('userId');
    if(userId && !loggedInUser){
      dispatch(fetchUser({userId, property: 'loggedInUser'}));
    }
    console.log(loggedInUser);
  },[loggedInUser]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />} />
        <Route path='' element={<HomePage/>} />
        <Route path="/catalog" element={<>CatalogPage</>}/>
        <Route path="/resource/:barcode" element={<>Resource</>}/>
        <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
