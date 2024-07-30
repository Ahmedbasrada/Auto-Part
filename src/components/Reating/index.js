import React, { useState } from "react";
import { useEffect } from "react";
import Style from './../../assets/css/Reating.module.css'
import man from './../../assets/images/man.png'
import boy from './../../assets/images/boy.png'
import boy2 from './../../assets/images/boy2.png'

import girl from './../../assets/images/girl.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'



const Index = () =>{
const [ReatingFirst , setReatingFirst] = useState({

    name:'اسماء محمد',
    commient: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.' ,
    img: girl

})

const [ReatingMain , setReatingMain] = useState({

    name:'علي محمد',
    commient: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.' ,
    img: boy

})


const [ReatingLast , setReatingLast] = useState({
   
    name:'أحمد محسن',
    commient: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.' ,
    img: man
})

    const people = [
        {
            name: 'أحمد محسن',
            img: man,
            discreption: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.'
        },
        {
            name: 'علي محمد',
            img: boy,
            discreption: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.'
        },
        {
            name: 'اسماء محمد',
            img: girl,
            discreption: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.'
        },

        {
            name: 'ادم خالد',
            img: boy2,
            discreption: 'سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة سنساعدك خطوه بخطوه من البداية إلى النهاية, من قبل خبراء لمساعدتك على الوصول إلى القمة.'
        },
    ]

    

    useEffect(() =>{
        NextComment()
    },[])


    const NextComment = async() => {
        console.log(people.length)
        let y = 1
        let x = 2
        let i = 3
        setInterval(() => {
                
            if(i >= people.length ){
                i = 0
            }
            if(x >= people.length ){
                x = 0
            }
            if(y >= people.length){
                y = 0
            }
               console.log(x)
               setReatingLast({
                name:people[y].name,
                commient: people[y].discreption,
                img: people[y].img
            })


                setReatingFirst({
                    name:people[i].name,
                    commient: people[i].discreption,
                    img: people[i].img
                })
                

                 console.log('X: ' + x)
                console.log('I: ' + i)
                setReatingMain({
                    name:people[x].name,
                    commient: people[x].discreption,
                    img: people[x].img
                })
                 
                i++
                x++
                y++
            }, 8000)
    }




    return(
        <div>
            <h1 className={Style.reatingTitle}>تقييمات</h1>
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
                <h2 className={Style.custmerName}>{ReatingLast.name}</h2>
                <div className={Style.smallImg}>
                    <img src={ReatingLast.img}/>
                </div>
                </div>
                <p dir="rtl">{ReatingLast.commient}
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
                <h2 className={Style.custmerName}>{ReatingMain.name}</h2>
                <div className={Style.img}>
                    <img src={ReatingMain.img}/>
                </div>
                </div>
                <p dir="rtl">{ReatingMain.commient}
        
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
                <h2 className={Style.custmerName}>{ReatingFirst.name}</h2>
                <div className={Style.smallImg}>
                    <img src={ReatingFirst.img}/>
                </div>
                </div>
                <p dir="rtl"> {ReatingFirst.commient}
        
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



export default Index