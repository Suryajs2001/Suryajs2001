import React from 'react'
 import './Home.css'
import Scrolling from '../Animation/Scrolling'
import SubFooter from '../SubFoooter/SubFooter'
import Popup from '../Pop-Up/Popup'
export default function Home() {
    return (
       <>
       <Popup/>
       <div className='home'>
         <div className='home-text'>  </div>
       </div>
       
       <Scrolling/>
       <SubFooter/>
       </>
    )
}
