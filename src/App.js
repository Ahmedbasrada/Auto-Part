import './App.css';
import React from 'react';
import UpBar from "./components/UpBar" 
import Offers from './components/Offers'
import Titles from './components/titles'
import priacingImage from './assets/images/carspare.png'

function App() {
  return (
    <>
   <UpBar/>
    <header>
    <div className='mainHeader'>
   <Offers/>
   <Titles/>
   </div>
   </header>
   <div className='container'>
    <div className='praicing'>
      <div className='praicing--wideScreenDiv'>
      <div className='praicing--row'>
      <div className='praicing--latter'>
      <h1 className='praicing--title'>اطلب تسعيرة الان</h1>
      <p className='praicing--p'>اطلب تسعيرة مجانية لجيمع قطع<br/> غيارك</p>
      <div className='praicing--btn--div'>
      <button className='praicing--btn'>سعر الان</button>
      </div>
      </div>
      <div className='praicing--img--div'>
        <img className='praicing--img' src={priacingImage} alt='تسعيرة'/>
      </div>
    </div>
    </div>
    </div>
   </div>
    </>
  );
}

export default App;
