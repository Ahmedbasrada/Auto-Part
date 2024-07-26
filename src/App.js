import './App.css';
import React from 'react';
import UpBar from "./components/UpBar" 
import Offers from './components/Offers'
import Titles from './components/titles'

function App() {
  return (
    <>
   <UpBar/>
    <header>
<div className='header--search'>
<input dir="rtl" type="text" className='search__input' placeholder="أبحث باسم أو رقم القطعة..."value="" disabled/>    

</div>
    <div className='openRow mainHeader'>
   <Offers/>
   <Titles/>
   </div>
   </header>
   <div className='container'>

   </div>
    </>
  );
}

export default App;
