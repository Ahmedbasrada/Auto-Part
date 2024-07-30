import './App.css';
import React, { useState } from 'react';
import UpBar from "./components/UpBar" 
import Offers from './components/Offers'
import Titles from './components/titles'
import Praicing from './components/praicing'
import MainHome from './components/mainHome'
import Reating from './components/Reating'
import Serves from './components/servses'
import Footer from './components/footer'
import AdImage from  './assets/images/AdAd.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'



function App() {

  const [Ad , setAd] = useState(true)

  const closeAd = () => {
    setAd(false)
  }
  
  return (
    <>
    {Ad ?
    <>
    <div onClick={()=> closeAd()}className='shadow'>
    </div>
    <div className='Ad'>
      <div onClick={()=> closeAd()} id='x'>
      <FontAwesomeIcon icon={faXmark} size='3x'/>
      </div>
      <img src={AdImage}/>
    </div>
    </>
    :
    <div></div>
    }
    
   <UpBar/>
    <header>
    <div className='mainHeader'>
   <Offers/>
   <Titles/>
   </div>
   </header>
   <div className='container'>
    <Praicing/>
    <MainHome/>
    <Reating/>
    <Serves/>
    </div>

    <Footer/>
    
    </>
  );
}

export default App;
