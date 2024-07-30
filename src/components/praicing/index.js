import React from 'react'
import priacingImage from './../../assets/images/carspare.png'


const index = () => {
    return(
        <div className='praicing'>
        <div className='praicing--wideScreenDiv'>
        <div className='praicing--row'>
        <div className='praicing--latter'>
        <h1 className='praicing--title'>اطلب تسعيرة الان</h1>
        <p className='praicing--p'>اطلب تسعيرة مجانية لجيمع قطع غيارك</p>
        <div className='praicing--btn--div'>
        <button className='praicing--btn'>سعر الان</button>
        </div>
        </div>
        <div className='praicing--img--div'>
          <img className='praicing--img'width='50px' src={priacingImage} alt='تسعيرة'/>
        </div>
      </div>
      </div>
      </div>
    )

}



export default index