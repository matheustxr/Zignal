import React, { useState } from 'react'
import vinil from "../assets/vinil.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeezer, faSpotify, faYoutube, faApple, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Albuns({title, capa, spotify, deezer, youtube, appleMusic, id, over}){
    return (
        <div className='w-350 '>
          <div id={id} className='w-300' >
            <img className='w-300  absolute z-20 ' src={capa}alt="" />
            <img id='vinil1' className='w-300 ' src={vinil} alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id={over} className=' absolute'>
              <div  className="content">
                <span className='text-base font-extrabold mb-2'>{title}</span>
                <a className='w-150 text-center text-sm border-2 border-white px-3 py-1 rounded hover:text-white' href={spotify}>
                  <FontAwesomeIcon className='mr-2' icon={faSpotify} size="lg" style={{color: "#ffffff",}} />
                  Spotify
                </a>
                <a className='w-150 text-center text-sm border-2 border-white px-3 py-1 rounded hover:text-white' href={deezer}>
                  <FontAwesomeIcon className='mr-2' icon={faDeezer} size="lg" style={{color: "#ffffff",}} />
                  Deezer
                </a>
                <a className='w-150 text-center text-sm border-2 border-white px-3 py-1 rounded hover:text-white' href={youtube}>
                  <FontAwesomeIcon className='mr-2' icon={faYoutube} size="lg" style={{color: "#ffffff",}} />
                  Youtube
                </a>
                <a className='w-150 text-center text-sm border-2 border-white px-3 py-[3px] rounded hover:text-white' href={appleMusic}>
                  <FontAwesomeIcon className='mr-2' icon={faApple} size="xl" style={{color: "#ffffff",}} />
                  Apple Music
                </a>
              </div>
            </div>
          </span>
        </div>
    )
}