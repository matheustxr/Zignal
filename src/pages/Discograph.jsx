import React from 'react'
import Particulas from '../components/Particles';
import Albuns from '../components/Albuns';
import $  from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeezer, faSpotify, faYoutube, faApple, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Discograph() {
  /*ANIMAÇÃO HOVER DESKTOP*/
  if( $(window).width() >= 768){

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

    /*COMPAIXAO*/
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
  }
  /*ANIMAÇÃO HOVER MOBILE*/
  if( $(window).width() < 768){
    /*ESPIRAL*/
    $(function(){
      $("#capaEspiral").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over1').addClass('hoverContentMobile')
          $(this).addClass('animationDisc')
        },
      );

      $('#over1').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile')
          $('#capaEspiral').removeClass('animationDisc')
        },
      )
    });

    /*CAMLEAO*/
    $(function(){
      $("#capaCamaleao").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over2').addClass('hoverContentMobile')
          $(this).addClass('animationDisc')
        },
      );

      $('#over2').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile')
          $('#capaCamaleao').removeClass('animationDisc')
        },
      )
    });

    /*KOMBI*/
    $(function(){
      $("#capaKombi").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over3').addClass('hoverContentMobile')
          $(this).addClass('animationDisc')
        },
      );

      $('#over3').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile')
          $('#capaKombi').removeClass('animationDisc')
        },
      )
    });

    /*VERDE*/
    $(function(){
      $("#capaVerde").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over4').addClass('hoverContentMobile2')
          $(this).addClass('animationDisc')
        },
      );

      $('#over4').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile2')
          $('#capaVerde').removeClass('animationDisc')
        },
      )
    });

    /*COMPAIXAO*/
    $(function(){
      $("#capaCompaixao").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over5').addClass('hoverContentMobile2')
          $(this).addClass('animationDisc')
        },
      );

      $('#over5').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile2')
          $('#capaCompaixao').removeClass('animationDisc')
        },
      )
    });

    /*BANDA*/
    $(function(){
      $("#capaBanda").on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $('#over6').addClass('hoverContentMobile2')
          $(this).addClass('animationDisc')
        },
      );

      $('#over6').on('click',
        function(){
          //Ao posicionar o cursor sobre a div
          $(this).removeClass('hoverContentMobile2')
          $('#capaBanda').removeClass('animationDisc')
        },
      )
    });
  }

  const disks = [
    /*COISAS LINDAS*/
    {
      title: 'Uma Porção de Coisas Lindas',
      capa: '../assets/albuns/capa-espiral.jpg',
      spotify: 'https://open.spotify.com/album/1QVmIVKcTONH0VsEIHxAZe',
      deezer: 'https://deezer.page.link/JrixTs98dcPhzVqG9',
      youtube: 'https://www.youtube.com/watch?v=bGrjJfXIuM8',
      appleMusic: 'https://music.apple.com/br/album/uma-por%C3%A7%C3%A3o-de-coisas-lindas/974025446?i=974025453',
      id: 'capaEspiral',
      over: 'over1'
    },

    /*METAMORFOSE*/
    {
      title: 'Metamorfose',
      capa: 'src/assets/albuns/capa-camaleao.jpg',
      spotify: 'https://open.spotify.com/album/1gMaQM9c2CZM9zruQvTM2Q',
      deezer: 'https://deezer.page.link/y9iPu2DPHC5YBNdC9',
      youtube: 'https://www.youtube.com/watch?v=txp6Ue1tNeU&list=PLJVmqcVRRPTA3NtNeOcBca9q35HlME9nx',
      appleMusic: 'https://music.apple.com/br/album/metamorfose-ep/1025207862',
      id: 'capaCamaleao',
      over: 'over2'
    },

    /*KOMBI*/
    {
      title: 'Virado',
      capa: 'src/assets/albuns/capa-kombi.jpg',
      spotify: 'https://open.spotify.com/album/45vSc12RNeoz4GRuNZPpY5?si=6jkVKzofSqOZ0hiqKTf1Mw',
      deezer: 'https://deezer.page.link/fWCb2En4KYBWuQ8v7',
      youtube: 'https://www.youtube.com/watch?v=j1oo3ypD82U&list=PLJVmqcVRRPTAqG3VtHq6DCNyDfDdDGPFg',
      appleMusic: 'https://music.apple.com/br/album/zignal-single/727500857',
      id: 'capaKombi',
      over: 'over3'
    },
    
    /*VERDE*/
    {
      title: 'Zignal',
      capa: 'src/assets/albuns/capa-verde.jpg',
      spotify: 'https://open.spotify.com/album/45vSc12RNeoz4GRuNZPpY5?si=6jkVKzofSqOZ0hiqKTf1Mw',
      deezer: 'https://deezer.page.link/fWCb2En4KYBWuQ8v7',
      youtube: 'https://www.youtube.com/watch?v=iFe8G382vI4&list=OLAK5uy_mUpYu1KGrgGMFKqsPIjgY-dzr2Wp0LcQ0',
      appleMusic: 'https://music.apple.com/br/album/zignal-single/727500857',
      id: 'capaVerde',
      over: 'over4'
    },
    
    /*COM PAIXÃO*/
    {
      title: 'Abrace com Paixão',
      capa: 'src/assets/albuns/capa-compaixao.jpg',
      spotify: 'https://open.spotify.com/album/3eJM7WoGwrm1DooverXR0lBv?si=pTFJh2zsTH-Igmw6n_82Ig',
      deezer: 'https://deezer.page.link/Yjo9zF2uCBjU4Dky9',
      youtube: 'https://www.youtube.com/watch?v=_usgk2K7v0M&list=OLAK5uy_mfOZ0M-YtbYs0PHQKqMTh-cqQnYH8TmV4',
      appleMusic: 'https://music.apple.com/br/album/abrace-com-paix%C3%A3o-single/987010763',
      id: 'capaCompaixao',
      over: 'over5'
    },
    
    /*BANDA*/
    {
      title: 'Zignal',
      capa: 'src/assets/albuns/capa-banda.jpg',
      spotify: 'https://open.spotify.com/album/5jM0AKCc82yMUy7fNUAZ7C?si=vKJxuMkoRtuYvr_-YbP7-g',
      deezer: 'https://deezer.page.link/UccdsnWpcaDnAqpQ8',
      youtube: 'https://www.youtube.com/watch?v=keQpJL9Wy3c&list=OLAK5uy_lrOOViFCFJKNOyFBN0ABT0zb6VptHaSdI',
      appleMusic: 'https://music.apple.com/br/album/zignal/428059182',
      id: 'capaBanda',
      over: 'over6'
    },
  ]

  return (
    <div className='relative z-20 top-0 w-full h-100% py-14 px-24  max-768:px-6 '>
      <Particulas />
      <iframe className='relative z-30 rounded' src="https://open.spotify.com/embed/artist/40NZXK16OeiuQJ5ONPzLAN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      <div className=' relative flex flex-wrap justify-around gap-y-12 mt-5 max-768:flex-col max-768:items-center w-full '>
       {disks.map((disk) => (
        <Albuns
          title= {disk.title}
          capa= {disk.capa}
          spotify= {disk.spotify}
          deezer= {disk.deezer}
          youtube= {disk.youtube}
          appleMusic= {disk.appleMusic}
          id={disk.id}
          over= {disk.over}
        />
       ))}
      </div>
    </div>
  )
}

export default Discograph