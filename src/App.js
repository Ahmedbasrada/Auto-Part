import './App.css';
import React from 'react';
import UpBar from "./components/UpBar" 
import Offers from './components/Offers'
import Titles from './components/titles'

function App() {
  return (
    <>
   <UpBar/>
    <header className='openRow'>
   <Offers/>
   <Titles/>
   </header>
   <div className='container'>

   </div>
    </>
  );
}

export default App;
