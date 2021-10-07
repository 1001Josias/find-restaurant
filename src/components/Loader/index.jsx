import React from 'react'
import Lottie from 'react-lottie'
import animationData from './food-loading.json'

function Loader(){
   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
   }

   return <Lottie options={defaultOptions}/>

}

export default Loader