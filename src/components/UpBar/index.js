import React from "react";
import logo from './../../assets/images/logo.png'
import Style from './../../assets/css/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'




const index = () => {
    return(
        
        <div className={` ${Style.container}`}>
            <div className="row">
        <div className={Style.List}>
            <div className={`row ${Style.actions}`}>
        <a  className={Style.SignIn}>
        <FontAwesomeIcon icon={faUser}  /> تسجيل الدخول
        </a>
        <div className={Style.vl}></div>
        <a  className={Style.basketContainer}>
            <div className={Style.redCircle}>1</div>
السلة <FontAwesomeIcon icon={faBasketShopping}  />
</a>
</div>
<div className='search'>
<input dir="rtl" type="text" className='search__input' placeholder="أبحث باسم أو رقم القطعة..."value="" disabled/>    

</div>   
</div>


               
        <div className='logo'>
        <a href="\" ><img  src={logo}/></a>
        </div>
        </div>
        <div className='header--search'>
<input dir="rtl" type="text" className='search__input' placeholder="أبحث باسم أو رقم القطعة..."value="" disabled/>    

</div>
        </div>
    )
}

export default index