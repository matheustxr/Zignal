import React from 'react'
import videoHome from "../assets/videoHome.mp4";

function Home() {
  return (
    <div className="absolute top-0 -z-10  w-full h-screen">
      <video className="w-full h-full object-cover" src={videoHome} autoPlay muted loop /> 
    </div>
  )
}

export default Home