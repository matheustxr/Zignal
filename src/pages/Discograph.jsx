import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
import Particulas from '../components/Particles'

function Discograph() {
  const size = {
    width: '100%',
    height: '370',
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  return (
    <div className='relative z-20 top-0 w-full h-100% py-14 px-24  max-768:px-12 '>
      <Particulas />
      <div className='relative '>
        <SpotifyPlayer className='m-auto'
          uri="https://open.spotify.com/artist/40NZXK16OeiuQJ5ONPzLAN?si=6ZW05sZBRda3XEfzDM6Ujg"
          size={size}
          view={view}
          theme={theme}
        />
      </div>

      <div className=' relative flex flex-wrap justify-around gap-5 mt-5 max-768:flex-col max-768:items-center w-full '>
        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-espiral.jpg" alt="" />
        </div>

        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-camaleao.jpg" alt="" />
        </div>

        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-kombi.jpg" alt="" />
        </div>

        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-verde.jpg" alt="" />
        </div>

        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-compaixao.jpg" alt="" />
        </div>

        <div>
          <img className='w-4/5' src="src/assets/albuns/capa-banda.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Discograph