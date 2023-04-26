import React from 'react'
import '../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeezer, faInstagram, faSpotify, faYoutube, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
      <footer className="w-full fixed bottom-0 z-50 flex items-center justify-between px-20 py-2 bg-black/50 ">
        <div >
          <h2 className='max-768:hidden'>Todos os direitos reservados - <strong>Bmouse Productions</strong> - 2023</h2>
        </div>

        <div className='flex gap-3'>
          <div className='max-768:hidden'>
            Redes sociais:
          </div>
          <div className='flex gap-3'>
            <a className='w-7 h-7 flex items-center justify-center rounded iconInsta' href="">
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",}} />
            </a>

            <a className='w-7 h-7 flex items-center justify-center rounded hover:bg-[#ff0a0a]' href="">
              <FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ffffff",}} />
            </a>

            <a className='w-7 h-7 flex items-center justify-center rounded hover:bg-[#1db954]' href="">
              <FontAwesomeIcon icon={faSpotify} size="lg" style={{color: "#ffffff",}} />
            </a>

            <a className='w-7 h-7 flex items-center justify-center rounded hover:bg-[#ff1313]' href="">
              <FontAwesomeIcon icon={faDeezer} size="lg" style={{color: "#ffffff",}} />
            </a>

            <a className='w-7 h-7 flex items-center justify-center rounded hover:bg-[#fc1860]' href="">
              <FontAwesomeIcon icon={faApple} size="xl" style={{color: "#ffffff",}} />
            </a>

            <a className='w-7 h-7 flex items-center justify-center rounded hover:bg-[#ff02a2]' href="">
              <FontAwesomeIcon icon={faStar} size="lg" style={{color: "#ffffff",}} />
            </a>
          </div>
        </div>

      </footer>
    )
  }
  
export default Footer