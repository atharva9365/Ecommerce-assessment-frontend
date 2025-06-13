  import React from 'react'
  import "./hero.css"
  import hand_icon from "../../assets/frontendassest/hand_icon.png"
  import arrow_icon from "../../assets/frontendassest/arrow.png"
  import heromain from "../../assets/frontendassest/hero_image.png"

  const Hero = () => {
    return (
      <>
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY </h2>
                <div>
                    <div className='hand-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                  <p>Collection</p>
                  <p> for Everyone</p> 
                </div>
                <div className='hero-latest-btn'>
                  <div>Latest Collection</div>
                  <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className='hero-right'>
              <img src={heromain} alt="" />
            </div>
        </div>
      </>
    )
  }

  export default Hero