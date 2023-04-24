import React from 'react'
import Particulas from '../components/Particles';
import $  from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeezer, faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic, faStar } from '@fortawesome/free-solid-svg-icons';

function Discograph() {
  /*ESPIRAL*/
  $(function(){
		$("#capaEspiral").on('mouseenter',
			function(){
				//Ao posicionar o cursor sobre a div
        $('#over1').addClass('hoverContent')
        $(this).addClass('animationDisc')
			},
		);
    
    $('#over1').on('mouseleave',
			function(){
				//Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent')
        $('#capaEspiral').removeClass('animationDisc')
			},
		)
	});

  /*CAMLEAO*/
  $(function(){
		$("#capaCamaleao").on('mouseenter',
			function(){
				//Ao posicionar o cursor sobre a div
        $('#over2').addClass('hoverContent')
        $(this).addClass('animationDisc')
			},
		);
    
    $('#over2').on('mouseleave',
			function(){
				//Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent')
        $('#capaCamaleao').removeClass('animationDisc')
			},
		)
	});

  /*KOMBI*/
  $(function(){
		$("#capaKombi").on('mouseenter',
			function(){
				//Ao posicionar o cursor sobre a div
        $('#over3').addClass('hoverContent')
        $(this).addClass('animationDisc')
			},
		);
    
    $('#over3').on('mouseleave',
			function(){
				//Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent')
        $('#capaKombi').removeClass('animationDisc')
			},
		)
	});

  /*VERDE*/
  $(function(){
		$("#capaVerde").on('mouseenter',
			function(){
				//Ao posicionar o cursor sobre a div
        $('#over4').addClass('hoverContent2')
        $(this).addClass('animationDisc')
			},
		);
    
    $('#over4').on('mouseleave',
			function(){
				//Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent2')
        $('#capaVerde').removeClass('animationDisc')
			},
		)
	});

  /*VERDE*/
  $(function(){
    $("#capaCompaixao").on('mouseenter',
      function(){
        //Ao posicionar o cursor sobre a div
        $('#over5').addClass('hoverContent2')
        $(this).addClass('animationDisc')
      },
    );
    
    $('#over5').on('mouseleave',
      function(){
        //Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent2')
        $('#capaCompaixao').removeClass('animationDisc')
      },
    )
  });

  /*BANDA*/
  $(function(){
    $("#capaBanda").on('mouseenter',
      function(){
        //Ao posicionar o cursor sobre a div
        $('#over6').addClass('hoverContent2')
        $(this).addClass('animationDisc')
      },
    );
    
    $('#over6').on('mouseleave',
      function(){
        //Ao posicionar o cursor sobre a div
        $(this).removeClass('hoverContent2')
        $('#capaBanda').removeClass('animationDisc')
      },
    )
  });


  return (
    <div className='relative z-20 top-0 w-full h-100% py-14 px-24  max-768:px-12 '>
      <Particulas />
      <iframe className='relative z-30 rounded' src="https://open.spotify.com/embed/artist/40NZXK16OeiuQJ5ONPzLAN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      
      <div className=' relative flex flex-wrap justify-around gap-5 mt-5 max-768:flex-col max-768:items-center w-full '>
        {/*ESPIRAL*/}
        <div className='w-300 '>
          <div id='capaEspiral'  >
            <img className='w-300  absolute z-20 ' src="src/assets/albuns/capa-espiral.jpg" alt="" />
            <img id='vinil1' className='w-300 ' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over1' className=''>
              <div  className="content">
                <span className='text-base font-extrabold mb-2'>Uma Porção de Coisas Lindas</span>
                <a className='text-sm border-2 border-white px-3 py-1 rounded ' href="">
                  <FontAwesomeIcon icon={faSpotify} size="lg" style={{color: "#ffffff",}} />
                  Spotify
                </a>
                <a className='text-sm border-2 border-white px-3 py-1 rounded' href="">Spotify</a>
                <a className='text-sm border-2 border-white px-3 py-1 rounded' href="">Spotify</a>
                <a className='text-sm border-2 border-white px-3 py-1 rounded' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

        {/*CAMALEAO*/}
        <div className='w-300 '>
          <div id='capaCamaleao' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-camaleao.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over2' className=''>
              <div  className="content">
                <span>Metamorfose</span>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

        {/*KOKMBI*/}
        <div className='w-300 '>
          <div id='capaKombi' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-kombi.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over3' className=''>
              <div  className="content">
                <span className='text-sm'>Virado</span>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

        {/*VERDE*/}
        <div className='w-300 '>
          <div id='capaVerde' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-verde.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over4' className=''>
              <div  className="content">
                <span>Zignal</span>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

        {/*COMPAIXAO*/}
        <div className='w-300 '>
          <div id='capaCompaixao' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-compaixao.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over5'>
              <div  className="content">
                <span>Abrace com Paixão</span>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

        {/*BANDA*/}
        <div className='w-300 '>
          <div id='capaBanda' >
            <img className='w-300 absolute z-20 ' src="src/assets/albuns/capa-banda.jpg" alt="" />
            <img id='vinil1' className='w-300 relative' src="src/assets/vinil.png" alt="" />
          </div>

          <span  className='w-300 h-300  '>
            <div id='over6'>
              <div  className="content">
                <span>Zignal</span>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
                <a className='' href="">Spotify</a>
              </div>
            </div>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Discograph