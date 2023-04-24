import React from 'react'
import SpotifyPlayer from 'react-spotify-player';
import Particulas from '../components/Particles'
import $ from 'jquery';
import onclick from 'jquery';

function Discograph() {
  const size = {
    width: '100%',
    height: '370',
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'


  
  $("span").on("mouseenter" ,function(){
  $(this).css("background-color", "yellow");
    }
  );

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
        <div className='w-300 '>
          {/*<div id='capaEspiral'  className=' w-full ' >
            <img className='w-300  absolute z-20 ' src="src/assets/albuns/capa-espiral.jpg" alt="" />
            <img id='vinil1' className='w-300 ' src="src/assets/vinil.png" alt="" />
          </div>*/}

          <span className='w-300 h-300  '>
            <div className='hoverContent z-30 w-300 h-300'>
              <div className='w-full h-full '>
                <div  className="content">
                  <span>Espiral</span>
                  <a className='' href="">Spotify</a>
                  <a className='' href="">Spotify</a>
                  <a className='' href="">Spotify</a>
                  <a className='' href="">Spotify</a>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className='w-300'  >
          <div id='capaEspiral'  className=' w-full' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-camaleao.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>
        </div>

        <div className='w-300'  >
          <div id='capaEspiral'  className=' w-full' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-kombi.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>
        </div>

        <div className='w-300'  >
          <div id='capaEspiral'  className=' w-full' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-verde.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>
        </div>

        <div className='w-300'  >
          <div id='capaEspiral'  className=' w-full' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-compaixao.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>
        </div>

        <div className='w-300'  >
          <div id='capaEspiral'  className=' w-full' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-banda.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Discograph