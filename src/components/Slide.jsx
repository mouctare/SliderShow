import React from 'react'
import { Slide } from 'react-slideshow-image'
import image1 from '../image/image1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/image3.jpg'
import image4 from '../image/image4.jpg'
import image5 from '../image/image5.jpg'
import './Slide.css'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true // les trois petits points en bat
}

const Slideshow = () => {
    return (
        <div className="containerSlide"> 
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={image1} alt="image1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <img src={image2} alt="image2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <img src={image3} alt="image3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <img src={image4} alt="image4" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <img src={image5} alt="image5" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;
