import firebase from '../firebase'
import React from 'react'
import twitter from '../assets/twitter_logo.svg'
import './register.scss'
import { NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react'
import shows from '../assets/show.svg'
import hidden from '../assets/hide.svg'


const Register = (props) => {
  const {user} = props
  const [show,setShow] = useState(false);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [checkPassword,setcheckPassword] = useState('');
  const [error,setErros] = useState('');
  function view() {
    setShow(!show)
  }
  function view1() {
    setShow1(!show1)
  }
  function view2() {
    setShow2(!show2)
  }
  function checkuser() {
    if(user){
      <Navigate to='/login'/>
    }
    else{
      <Navigate to='/register'/>
    }
  }
  async function  handleSubmit(e) {
    e.preventDefault()

    if(!email && !password && !checkPassword){
      setErros('please fill in all')
    }
    if(password !== checkPassword){
      setErros('password is not suitable')
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch (error) {
      error(error)
    }
    setEmail('');
    setPassword('')
    setcheckPassword('')
  }
  return (
        <div className="container1">
         
      <div className="register">
      <h3 className='err'>{error}</h3>
        <img src={twitter} alt="" />
        <h2>Create an account</h2>
        <div className="reginster_inputs">
        <form onSubmit={handleSubmit}>
        <label>
            <input placeholder='Email' value={email} className='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            <input placeholder='Password' value={password} className='passwd' type={show1 ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
            <img className='show' onClick={view1} src={`${show1 ? shows : hidden}`} alt="" />

          </label>
          <label>
            <input placeholder='Checkpassword' value={checkPassword} className='checkpasswd' onChange={(e) => setcheckPassword(e.target.value)} type={show ? 'text' : 'password'}/>
            <img className='show' onClick={view} src={`${show ? shows : hidden}`} alt="" />
          </label>
          <button onClick={checkuser} type='submit'>Next</button>
        </form>
        </div>
        <NavLink to='/login'>
        Use email
        </NavLink>
        <p>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        
      </div>
      </div>
  )
}

export default Register
