import React from 'react'
import "./Hero.css"
import arrow_btn from "../../Assets/arrow_btn.png"
import pause_icon from "../../Assets/pause_icon.png"
import play_icon from "../../Assets/play_icon.png"

export const Hero = ({Containt,HeroCount,SetHeroCount,PlayStatus,SetSetPlayStatus}) => {



  return (
    <div className='hero'>
    <div className='text'>
       <p>{Containt.text1}</p>
       <p>{Containt.text2}</p>
    </div>
    <div className="Explorefun">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
    </div>

    <div className="hero-dot-play">
        <ul className="hero-dots">
            <li onClick={()=>SetHeroCount(0)} className={HeroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>SetHeroCount(1)} className={HeroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>SetHeroCount(2)} className={HeroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
    </div>

    <div className="hero-play">
        <img onClick={()=>SetSetPlayStatus(!PlayStatus)} src={PlayStatus?pause_icon:play_icon} alt="" />
        <p>See The Video</p>
    </div>

    </div>
  )
}
