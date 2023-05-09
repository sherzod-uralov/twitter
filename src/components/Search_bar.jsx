import React, {  useState } from 'react'
import search from '../assets/search.svg'
import prof1 from '../assets/prof1.svg'
import setting from '../assets/setting.svg'
import { Link } from 'react-router-dom'
const Search_bar = () => {
    const [fallow,setFallow] = useState(false);
    const [fallow1,setFallow1] = useState(false);
    const [burger,setBurger] = useState(false);
    function setfallows(){
        setFallow(!fallow)
    }
    function setfallows1(){
      setFallow1(!fallow1)
  }
  function Burger() {
    setBurger(!burger)
  }
  return (
   <footer>
    <div className="right_bar">
        <div className="search_menu">
            <img onClick={Burger} src={search} alt="" />
            <input type="text" placeholder='Search Twitter'/>
        </div>
    </div>
        <div className="trending">
            <div className="title">
                <h3>Trends for you</h3>
                <img src={setting} alt="" />
            </div>
            <div className="trending_card">
                <div className="trending_card-text">
                <div>
                <h2>Trending in Germany</h2>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
                </div>
                <div className="three_circle lefts_card">
                  <span className='circle'></span>
                  <span className='circle'></span>
                  <span className='circle'></span>
                </div>
                </div>
                <div className="trending_card-text">
                <div>
                <h2>Trending in Germany</h2>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
                </div>
                <div className="three_circle lefts_card">
                  <span className='circle'></span>
                  <span className='circle'></span>
                  <span className='circle'></span>
                </div>
                </div>
                <div className="trending_card-text">
                <div>
                <h2>Trending in Germany</h2>
                <h3>Revolution</h3>
                <span>50.4K Tweets</span>
                </div>
                <div className="three_circle lefts_card">
                  <span className='circle'></span>
                  <span className='circle'></span>
                  <span className='circle'></span>
                </div>
                </div>
            </div>
        </div>
        <div className='Youmightlike'>
            <h2>You might like</h2>
            <div className="Youmightlike_prof">
               <div className='prof_flex'>
              <div className='prof_flex-child'>
              <img src={prof1} alt="" />
                <div className="div_texts">
                    <h2>Mushtariy</h2>
                    <span>@Mushtar565266</span>
                </div>
              </div>
                <button onClick={setfallows} className={`${fallow ? 'white' : ''}`}>{fallow ? 'following' : 'follow'}</button>
               </div>
            </div>
            <div className="Youmightlike_prof">
               <div className='prof_flex'>
              <div className='prof_flex-child'>
              <img src={prof1} alt="" />
                <div className="div_texts">
                    <h2>Mushtariy</h2>
                    <span>@Mushtar565266</span>
                </div>
              </div>
                <button onClick={setfallows1} className={`${fallow1 ? 'white' : ''}`}>{fallow1 ? 'following' : 'follow'}</button>
               </div>
            </div>
        </div>
   </footer>
  )
}

export default Search_bar
