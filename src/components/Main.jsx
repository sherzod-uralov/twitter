import React, { useEffect, useState } from 'react'
import status1 from '../assets/status(1).svg'
import status2 from '../assets/status(2).svg'
import status3 from '../assets/status(3).svg'
import status4 from '../assets/status(4).svg'
import status5 from '../assets/status(5).svg'
import nav_bar from '../assets/profe.png'
import axios from 'axios'
import homeLogo from '../assets/Vector.svg'
import homeLogo1 from '../assets/Vector(1).svg'
import homeLogo2 from '../assets/Vector(2).svg'
import homeLogo3 from '../assets/Vector(3).svg'
import homeLogo4 from '../assets/Vector(4).svg'
import homeLogo5 from '../assets/Vector(5).svg'
import homeLogo6 from '../assets/Vector(6).svg'
import homeLogo7 from '../assets/Vector(7).svg'
import twitterLogo from '../assets/twitter_logo.svg'
import x from '../assets/icons8-cancel-40.png'
import ProfilImg from '../assets/profe.png'
import { NavLink } from 'react-router-dom'
import Search_bar from './Search_bar'
import { auth } from "../firebase";
import logout from '../assets/logout-svgrepo-com.svg'

const images = [
   {
    image: homeLogo,
    tittle:"Home"
   },
   {
    image: homeLogo1,
    tittle:"Explore"
   },
   {
    image: homeLogo2,
    tittle:"Notifications"
   },
   {
    image: homeLogo3,
    tittle:"Messages"
   },
   {
    image: homeLogo4,
    tittle:"Bookmarks"
   },
   {
    image: homeLogo5,
    tittle:"Lists"
   },
   {
    image: homeLogo6,
    tittle:"Profile"
   },
   {
    image: homeLogo7,
    tittle:"More"
   },
]

const Main = () => {
   const handleSignOut = async () => {
        await auth.signOut();
    }
  const [datas,setdata] = useState([]);
  const [loader,setLoader] = useState(false);
  const [burger,setBurger] = useState(false)
  const [pos,setpos] = useState(true) 
  document.body.classList = burger ? 'ower' : ''
  function Remove() {
    setBurger(false)
    console.log('removed');
  }
  function Burgers() {
    setBurger(!burger)
    console.log('true');
  }

  const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/user/following',
    params: {
      user_id: '96479162',
      limit: '40'
    },
    headers: {
      'X-RapidAPI-Key': '3d4ef34b49mshe1b1dfe63ee49a1p10694ejsn4064dfb1dcdf',
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
  };
  async function dataFetch() {
    try {
      const response = await axios.request(options);
      setLoader(true)
      setpos(false)
      setdata(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function dataFilter(obj) {
    const publishedTime = obj.slice(14,16);
    return publishedTime
  }

  useEffect(() => {
    dataFetch()
  },[setdata])
  return (  
    <div className='flex-container'>
    <aside className={`${burger ? 'lefts': ''}`}>
            <div className="aside_left">
                <div>
                <div className='assside_flex'>
                <img className='twitterLogo' src={twitterLogo} alt="" />
                <img onClick={Remove} className='remove' src={x} alt="" />
                </div>
               <div className="aside_left-cards">
               {
                    images.map((i,index) => (
                        <div key={index} className="card">
                            <img src={i.image} alt=""/>
                            <h2>{i.tittle}</h2>
                        </div>
                    ))
                }
                    <div className='card' onClick={handleSignOut}>
                    <img className='logout' src={logout} alt=""/>
                            <h2>logout</h2>
                    </div>
               <button>Tweet</button>
               </div>
                </div>
               <div className="user_div">
                <div className="user_div_child">
                <img src={ProfilImg} alt="" />
                <div className="user_div-text">
                <h3>Bobur</h3>
                <NavLink to='/bobur_mavlonov'>
                @bobur_mavlonov
                </NavLink>
                </div>
                </div>
                <div className="three_circle">
                  <span className='circle'></span>
                  <span className='circle'></span>
                  <span className='circle'></span>
                </div>
               </div>
            </div>
        </aside>
    <main className={`${pos ? 'main_position' : ''}`}>
   <div className={`${loader ? 'none' : ''}`}>
   <div  className="centre">
	<div className="loader"></div>
    </div>
</div>
     <div className='main_cards'>
    <div className="main_home">
      <img  onClick={Burgers} className={`${burger ? 'dnone': ''}`} src={nav_bar} alt="" />
      <h1>Home</h1>
    <hr />
   </div> 
      {
       datas.results?.map((i,intex) => (
       <div key={intex} className='main_card'>
        <div className='card_flex'>
        <div className='img_and_name'>
         <img src={i.profile_pic_url} alt="" />
        <div className='name_card'>
        <div className='name_card_child'>
        <h3>{i.name}</h3>
        <div className='name_card_child-time'>
        <div className='names_card'>
        <h4>@{i.username}</h4>
        <span></span>
        </div>
        <h2>{dataFilter(i.creation_date)}m</h2>
        </div>
        </div>
        <p className='description'>{i.description}</p>
        </div>
         </div>
         <div className="three_circle lefts_card">
                  <span className='circle'></span>
                  <span className='circle'></span>
                  <span className='circle'></span>
                </div>
        </div>
        <div className="status_cards">
        <div className="status_card">
          <img src={status1} alt="" />
          <h3>{i.following_count}</h3>
        </div>
        <div className="status_card">
        <img src={status2} alt="" />

        </div>
        <div className="status_card">
        <img src={status5 } alt="" />
        <h3>{i.favourites_count}</h3>
        </div>
        <div className="status_card">
        <img src={status3} alt="" />
        </div>
        <div className="status_card last_card">
        <img src={status4} alt="" />
        <h3>{i.number_of_tweets}</h3>
        </div>
        </div>
       </div>
       ))
      }
    </div>
    <div className="div_bottom_menu">

    </div>
   </main>
   <Search_bar/>
   </div>
  )
}

export default Main
