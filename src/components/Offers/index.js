import React, { useState, useEffect, useRef } from 'react';
import Style from './../../assets/css/Offers.module.css';
import Ad1 from './../../assets/images/Ad1.png';
import Ad2 from './../../assets/images/Ad2.webp';
import Ad3 from './../../assets/images/Ad3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight, faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const[bigPage, setBigPage] = useState(true)
    const [images] = useState([Ad1, Ad2, Ad3]);
    const intervalRef = useRef(null);

    const clearCurrentInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const startNewInterval = () => {
        clearCurrentInterval();
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // تغيير الصورة كل 5 ثواني
    };

    const handleNextImage = (direction) => {
        clearCurrentInterval();
        if (direction === 'right') {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        } else {
            setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
        }
        startNewInterval();
    };

    useEffect(() => {
        startNewInterval();
        return () => clearCurrentInterval(); // تنظيف المؤقت عند إلغاء المكون
    }, []);

    useEffect(() => {
        document.querySelector('#N1').className = 'emptyBox';
        document.querySelector('#N2').className = 'emptyBox';
        document.querySelector('#N3').className = 'emptyBox';
        document.querySelector(`#N${currentIndex + 1}`).className = 'fillBox';
    }, [currentIndex]);
    useEffect(() =>{
        if(window.innerWidth > 750){
            setBigPage(true)
          }else{
            setBigPage(false)
        
          }
          console.log(window.innerWidth)
    },[window.innerWidth])
  

    return (
        <div>
            <div className={Style.OffersBox}>
                <div className={Style.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Ad ${index + 1}`} />
                    ))}
                </div>


                {bigPage?
                <>
                <nav className={Style.RightArrow} onClick={() => handleNextImage('right')}>
                    <FontAwesomeIcon icon={faSquareCaretRight} size="3x" />
                </nav>
                <nav className={Style.LeftArrow} onClick={() => handleNextImage('left')}>
                    <FontAwesomeIcon icon={faSquareCaretLeft} size="3x" />
                </nav>
                </>
                :
                    <>
                    <nav className={Style.RightArrow} onClick={() => handleNextImage('right')}>
                        <FontAwesomeIcon icon={faSquareCaretRight} size="2x" />
                    </nav>
                    <nav className={Style.LeftArrow} onClick={() => handleNextImage('left')}>
                        <FontAwesomeIcon icon={faSquareCaretLeft} size="2x" />
                    </nav>
                    </>
                    }
            </div>
            <div className="visibility">
                <div id='N1' className="fillBox"></div>
                <div id='N2' className="emptyBox"></div>
                <div id='N3' className="emptyBox"></div>
            </div>
            </div>
    );
};

export default Index;
