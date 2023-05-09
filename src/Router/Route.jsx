import { BrowserRouter, Routes , Route ,Navigate } from 'react-router-dom'
import Aside from '../components/Aside'
import Main from '../components/Main'
import { useState,useEffect } from 'react'
import Search_bar from '../components/Search_bar'
import Register from '../components/Register'
import Login from '../components/Login'
import { auth } from '../firebase'
const Routess = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
              setUser(user);
          } else {
              setUser(null);
          }
      })
      return unsubscribe;
  })
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route user = {user} path='/' element = {user ? <Navigate to='/home'/> :<Register/> }/>
      <Route path='/login' element = {user ? <Navigate to='/home'/> : <Login/>}/>
      <Route path='/home' element= { user ? <Main/>  : <Navigate to='/'/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routess
