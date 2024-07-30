import React from "react";
import Style from './../../assets/css/Reating.module.css'
import man from './../../assets/images/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



const index = () =>{
    return(
        <div>
            <h2 className={Style.reatingTitle}>تقييمات</h2>
            <div className={Style.AllReating}>






            <div className={Style.ReatingDiv}>
                <div className={Style.moaiin}>
                    <div className={Style.morbah}>
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
      className={Style.quote}
       // الحجم الجديد
    >
      <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"></path>
    </svg>
                         </div>
                </div>
            <div className={Style.custmerInfo}>
                <h2 className={Style.custmerName}>اسماء محمد</h2>
                <div className={Style.smallImg}>
                    <img src={man}/>
                </div>
                </div>
                <p dir="rtl">سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.
        
                </p>
                <div className={`row ${Style.stars}`}>
                <FontAwesomeIcon size="1x" icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                </div>

            </div>




            <div className={Style.ReatingDivMain}>
                <div className={Style.moaiin}>
                    <div className={Style.morbah}>
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
      className={Style.quote}
       // الحجم الجديد
    >
      <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"></path>
    </svg>
                         </div>
                </div>
            <div className={Style.custmerInfo}>
                <h2 className={Style.custmerName}>اسماء محمد</h2>
                <div className={Style.img}>
                    <img src={man}/>
                </div>
                </div>
                <p dir="rtl">سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.
        
                </p>
                <div className={`row ${Style.stars}`}>
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                </div>

            </div>



            <div className={Style.ReatingDiv}>
                <div className={Style.moaiin}>
                    <div className={Style.morbah}>
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
      className={Style.quote}
       // الحجم الجديد
    >
      <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z"></path>
    </svg>
                         </div>
                </div>
            <div className={Style.custmerInfo}>
                <h2 className={Style.custmerName}>اسماء محمد</h2>
                <div className={Style.smallImg}>
                    <img src={man}/>
                </div>
                </div>
                <p dir="rtl">سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.
        
                </p>
                <div className={`row ${Style.stars}`}>
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                </div>

            </div>





            
            </div>
       </div>
    )
}



export default index