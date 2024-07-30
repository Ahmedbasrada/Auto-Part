import './App.css';
import React from 'react';
import UpBar from "./components/UpBar" 
import Offers from './components/Offers'
import Titles from './components/titles'
import Praicing from './components/praicing'
import MainHome from './components/mainHome'
import Reating from './components/Reating'


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
    <Praicing/>
    <MainHome/>
    <Reating/>
   </div>
    </>
  );
}

export default App;
