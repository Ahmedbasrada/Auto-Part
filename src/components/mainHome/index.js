import React from "react";
import Style from './../../assets/css/MainHome.module.css'
import toyota from './../../assets/images/toyota.png'
import camry_lamp from './../../assets/images/camry_lamp.png'
import smallToyota from './../../assets/images/smallToyota.png'
import { Directions } from "@material-ui/icons";





const index = () =>{

  const Scroll = (type , direction) => {
    let digree
    if (direction == 'right'){
      digree = 100
    }else{
      digree = -100
    }
     const container = document.getElementById('electrec');
     console.log('haaaa')
    container.scrollBy({left: digree, behavior: 'smooth'});
  }
    return(
        <div className={Style.container}>
            <h1>اختر الشركة</h1>
            <div className="hl"></div>
           <div className="row cards" dir="rtl">
            <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>
          

           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>

           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>

           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>
           

           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>

           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>


           <div>
            <div className="companiesCardLogo" >
                <img className="companiesCardLogo--img" src={toyota} alt={`شعار شركة تويوتا`}/>

           </div>
           <h3>تويوتا</h3>

           </div>
           
           </div>


           <div className={`row ${Style.AutoPartType}`}>


           <div className={`row ${Style.ProdectsArrowsContainer}`}>
            <div className={`row ${Style.showMore}`}>
           <svg className={Style.hover} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>keyboard_arrow_left</title>
<path d="M20.563 22.104l-1.875 1.875-8-8 8-8 1.875 1.875-6.125 6.125z"></path>
</svg>
           <h3 className={Style.hover}>عرض المزيد</h3>
           </div>
            <div onClick={event  => Scroll("electrec" , "left")}  className={Style.ProdectsArrows}>
<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>keyboard_arrow_left</title>
<path d="M20.563 22.104l-1.875 1.875-8-8 8-8 1.875 1.875-6.125 6.125z"></path>
</svg>
</div>
<div onClick={event  => Scroll("electrec" , "right")}  className={Style.ProdectsArrows}>
           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>keyboard_arrow_right</title>
<path d="M11.438 22.479l6.125-6.125-6.125-6.125 1.875-1.875 8 8-8 8z"></path>
</svg>
</div>
</div>
           <h1 className={Style.AutoType}>القطع الكهربائية</h1>
           </div>
            <div className="hl"></div>
            <div className={`${Style.ProdectsCards}`} >
            <div className={`row cards ${Style.gap}`}  id="electrec" dir="rtl">
            <div className={Style.card} dir="ltr">
              <div className={Style.genuen}>
                <span>أصلي</span>
              </div>
            <div className={Style.cardImageDiv}>
              <img className={Style.prodectsImage}  src={camry_lamp}/>
            </div>
            <div className={Style.topCard}>
            <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>

  </div>
            <h2 className={Style.ProdectsName}>شمعة أمامية</h2>
           
            </div>
            <p className={Style.ProdectsName}>: متوافقة مع</p>
            <p>تويوتا كامري 2020</p>
            <hr></hr>
            <div className={Style.bottomCard}>

            <div className={Style.lefty}>
                <img className={Style.smallLogo}src={smallToyota}/>
            </div>


            <div className={Style.righty}>
            <h3 className={`${Style.praice} `}>SR 1995.95</h3>
            <h4 className={Style.praiceDis}>SR 2499.95</h4>
            </div>
            

            </div>
            </div>




            <div className={Style.card} dir="ltr">
            <div className={Style.genuen}>
                <span>أصلي</span>
              </div>
            <div className={Style.cardImageDiv}>
              <img className={Style.prodectsImage}  src={camry_lamp}/>
            </div>
            <div className={Style.topCard}>
            <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>

  </div>
            <h2 className={Style.ProdectsName}>شمعة أمامية</h2>
           
            </div>
            <p className={Style.ProdectsName}>: متوافقة مع</p>
            <p>تويوتا كامري 2020</p>
            <hr></hr>
            <div className={Style.bottomCard}>

            <div className={Style.lefty}>
                <img className={Style.smallLogo}src={smallToyota}/>
            </div>


            <div className={Style.righty}>
            <h3 className={`${Style.praice} `}>SR 1995.95</h3>
            <h4 className={Style.praiceDis}>SR 2499.95</h4>
            </div>
            

            </div>
            </div>



            <div className={Style.card} dir="ltr">
            <div className={Style.noneGenuine}>
                <span>تجاري</span>
              </div>
            <div className={Style.cardImageDiv}>
              <img className={Style.prodectsImage}  src={camry_lamp}/>
            </div>
            <div className={Style.topCard}>
            <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>

  </div>
            <h2 className={Style.ProdectsName}>شمعة أمامية</h2>
           
            </div>
            <p className={Style.ProdectsName}>: متوافقة مع</p>
            <p>تويوتا كامري 2020</p>
            <hr></hr>
            <div className={Style.bottomCard}>

            <div className={Style.lefty}>
                <img className={Style.smallLogo}src={smallToyota}/>
            </div>


            <div className={Style.righty}>
            <h3 className={`${Style.praice} `}>SR 1995.95</h3>
            <h4 className={Style.praiceDis}>SR 2499.95</h4>
            </div>
            

            </div>
            </div>



            <div className={Style.card} dir="ltr">
            <div className={Style.genuen}>
                <span>أصلي</span>
              </div>
            <div className={Style.cardImageDiv}>
              <img className={Style.prodectsImage}  src={camry_lamp}/>
            </div>
            <div className={Style.topCard}>
            <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>

  </div>
            <h2 className={Style.ProdectsName}>شمعة أمامية</h2>
           
            </div>
            <p className={Style.ProdectsName}>: متوافقة مع</p>
            <p>تويوتا كامري 2020</p>
            <hr></hr>
            <div className={Style.bottomCard}>

            <div className={Style.lefty}>
                <img className={Style.smallLogo}src={smallToyota}/>
            </div>


            <div className={Style.righty}>
            <h3 className={`${Style.praice} `}>SR 1995.95</h3>
            <h4 className={Style.praiceDis}>SR 2499.95</h4>
            </div>
            

            </div>
            </div>




            <div className={Style.card} dir="ltr">
            <div className={Style.noneGenuine}>
                <span>تجاري</span>
              </div>
            <div className={Style.cardImageDiv}>
              <img className={Style.prodectsImage}  src={camry_lamp}/>
            </div>
            <div className={Style.topCard}>
            <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>

  </div>
            <h2 className={Style.ProdectsName}>شمعة أمامية</h2>
           
            </div>
            <p className={Style.ProdectsName}>: متوافقة مع</p>
            <p>تويوتا كامري 2020</p>
            <hr></hr>
            <div className={Style.bottomCard}>

            <div className={Style.lefty}>
                <img className={Style.smallLogo}src={smallToyota}/>
            </div>


            <div className={Style.righty}>
            <h3 className={`${Style.praice} `}>SR 1995.95</h3>
            <h4 className={Style.praiceDis}>SR 2499.95</h4>
            </div>
            

            </div>
            </div>


            
            </div>
            </div>
            <h1>القطع الميكانيكة</h1>
            <div className="hl"></div>
            <h1>العضلات</h1>
            <div className="hl"></div>

            <h1>القطع الخارجية | البودي</h1>
            <div className="hl"></div>

            <h1>الديكور</h1>
            <div className="hl"></div>

  <div className="card-body">
</div>
  
  
</div>
    )
}


export default index