import React from 'react'
import firebase from '../firebase';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import twitter from '../assets/twitter_logo.svg'
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleLogin = async (e) => {
      e.preventDefault();
      if (!email && !password) {
          setError('enter information')
      } else {
          try {
              await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
              if (error.code === 'auth/user-not-found') {
                  setError('user not found')
              } else if (error.code === 'auth/wrong-password') {
                  setError('password error')
              } else {
                  setError(error.message)
              }
          }
      }
  }
  return (
    <div>
       <div className="container1">
         
         <div className="register">
         <h3 className='err'>{error}</h3>
           <img src={twitter} alt="" />
           <h2>Login</h2>
           <div className="reginster_inputs">
           <form onSubmit={handleLogin}>
           <label>
               <input placeholder='Email' value={email} className='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
             </label>
             <label>
               <input placeholder='Password' value={password} className='passwd' type="password" onChange={(e) => setPassword(e.target.value)}/>
             </label>
             <button type='submit'>Next</button>
           </form>
           </div>
           <p>
           Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
           </p>
         </div>
         </div>
    </div>
  )
}

export default Login
