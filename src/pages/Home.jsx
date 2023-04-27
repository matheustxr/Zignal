import React from 'react'
import videoHome from "../assets/videoHome.mp4";

function Home() {
  return (
    <div className="absolute top-0 -z-10  w-full h-screen">
      <video className="w-full h-full object-cover"  autoPlay muted loop > 
        <source src={videoHome} />
      </video>
    </div>
  )
}

export default Home