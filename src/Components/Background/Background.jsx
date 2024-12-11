import React from 'react'
import "./Background.css"
import video1 from "../../Assets/video1.mp4"
import image1 from "../../Assets/image1.png"
import image2 from "../../Assets/image2.png"
import image3 from "../../Assets/image3.png"
import pause_icon from "../../Assets/pause_icon.png"
import play_icon from "../../Assets/play_icon.png"


export const Background = ({HeroCount,PlayStatus}) => {

    if(PlayStatus)
    {
       return(
        <video className='Background' autoPlay loop muted>
           <source src={video1}  />
        </video>
       )
    }
    else if(HeroCount === 0)
    {
        return <img src={image1} className='Background' />
    }
    else if(HeroCount === 1)
    {
        return <img src={image2} className='Background' />
    } 
    else if(HeroCount === 2)
    {
        return <img src={image3} className='Background' />
    }

  
}
