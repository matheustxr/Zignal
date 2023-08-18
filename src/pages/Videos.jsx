import {React, useState } from 'react';
import Particulas from '../components/Particles';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCirclePlay}  from "@fortawesome/free-solid-svg-icons";

import vontade from "../assets/hqdefault.webp"

import guitarra from "../assets/GuitarTom3.webp"

import lual from "../assets/thumbs/lual-sem-lua.webp"
import namorada from "../assets/thumbs/primeira-namorada.webp"
import dez from "../assets/thumbs/dez-meia.webp"
import esperanca from "../assets/thumbs/leito-esperança.webp"
import rock from "../assets/thumbs/rock-escola.webp"
import hoje from "../assets/thumbs/hoje-dia.webp"
import reggae from "../assets/thumbs/reggae-horto.webp"
import porcao from "../assets/thumbs/porcao-coisas.webp"
import esperar from "../assets/thumbs/esperar.webp"



export default function Videos() {
      {/*SOLO*/}
  const [showVontade, setShowVontade] = useState(false);

    {/*ZIGNAL*/}

  {/*LUAL*/}
  const [showLual, setShowLual] = useState(false);

  {/*NAMORADA*/}
  const [showNamorada, setShowNamorada] = useState(false);

  {/*DEZ E MEIA*/}
  const [showDez, setShowDez] = useState(false);

  {/*ESPERANÇA*/}
  const [showEsperanca, setShowEsperanca] = useState(false);

  {/*ROCK ESCOLA*/}
  const [showEscola, setShowEscola] = useState(false);

  {/*HOJE É DIA*/}
  const [showDia, setShowDia] = useState(false);

  {/*REGGAE DO HORTO*/}
  const [showHorto, setShowHorto] = useState(false);

  {/*UMA PORÇÃO DE COISAS LINDAS*/}
  const [showPorcao, setShowPorcao] = useState(false);

  {/*DE SE ESPERAR*/}
  const [showEsperar, setShowEsperar] = useState(false);

  return (
    <>
      <Particulas />
      <div className='px-20 pb-20 max-768:px-4 relative z-10'>
        <h1 className='text-5xl mt-3 text-center mb-12'>Video Clipes</h1>
        {/*SOLO*/}
        <div>
          <h2 className='text-4xl my-3 lineTitle max-768:text-start'>Carreira Solo</h2>
          <div className='flex flex-wrap  mt-4 justify-center max-768:justify-center '>
            <div className='flex'>

              <img src={guitarra} alt="" className='w-[400px]'/>
              <a className='cursor-pointer relative' onClick={() => setShowVontade(true)}>
                <div className='w-336 h-188'>
                    <img className='rounded' src={vontade} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
              </a>
              <img src={guitarra} alt="" className='w-[400px] scale-x-[-1]'/>

              <Modal
                size="lg"
                show={showVontade}
                onHide={() => setShowVontade(false)}
                aria-labelledby="lual-sem-lua"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center ' id="lual-sem-lua">
                    Vontade
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/VfwDAX3t19Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>

        {/*ZIGNAL*/}
        <div className='mt-12'>
          <h2 className='text-4xl my-3 lineTitle max-768:text-start'>Zignal</h2>
          <div className='grid max-768:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 justify-items-center sm:gap-12 gap-10 lg:gap-16'>
            {/*LUAL SEM LUA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowLual(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={lual} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Lual Sem Lua</p>
              </div>
              
              <Modal
                size="lg"
                show={showLual}
                onHide={() => setShowLual(false)}
                aria-labelledby="lual-sem-lua"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="lual-sem-lua">
                    Lual Sem Lua
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/DQYej0AowYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*PRIMEIRA NAMORADA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowNamorada(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={namorada} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Primeira Namorada</p>
              </div>
              

              <Modal
                size="lg"
                show={showNamorada}
                onHide={() => setShowNamorada(false)}
                aria-labelledby="primeira namorada"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="primeira namorada">
                    Priemira Namorada
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/bgADXQ_xiFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*DEZ E MEIA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowDez(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={dez} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Dez e Meia</p>
              </div>
              
              <Modal
                size="lg"
                show={showDez}
                onHide={() => setShowDez(false)}
                aria-labelledby="dez-meia"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="dez-meia">
                    Dez e Meia
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/rBSzWvP8qZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*LEITO DA ESPERANÇA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowEsperanca(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={esperanca} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Leito da Esperança</p>
              </div>
              
              <Modal
                size="lg"
                show={showEsperanca}
                onHide={() => setShowEsperanca(false)}
                aria-labelledby="leito-da-esperanca"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="leito-da-esperanca">
                    Leito da Esperança
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/_usgk2K7v0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*ROCK ESCOLA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowEscola(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={rock} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Rock Escola</p>
              </div>
              
              <Modal
                size="lg"
                show={showEscola}
                onHide={() => setShowEscola(false)}
                aria-labelledby="rock-escola"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="rock-escola">
                    Rock Escola
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/9MLOmtWbNw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*HOJE É DIA*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowDia(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={hoje} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Hoje é Dia</p>
              </div>
              
              <Modal
                size="lg"
                show={showDia}
                onHide={() => setShowDia(false)}
                aria-labelledby="hoje-dia"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="hoje-dia">
                    Hoje é Dia
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/iFe8G382vI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*REGGAE DO HORTO*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowHorto(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={reggae} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Reggae do Horto</p>
              </div>
              
              <Modal
                size="lg"
                show={showHorto}
                onHide={() => setShowHorto(false)}
                aria-labelledby="reggae-horto"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="reggae-horto">
                    Reggae do Horto
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/8XMQzGp_0ZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*UMA PORÇÃO DE COISAS LINDAS*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowPorcao(true)}>
                  <div className='w-336 h-188'>
                    <img className='rounded' src={porcao} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - Uma Porção de Coisas Lindas</p>
              </div>
              
              <Modal
                size="lg"
                show={showPorcao}
                onHide={() => setShowPorcao(false)}
                aria-labelledby="porcao-coisas-lindas"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="porcao-coisas-lindas">
                    Uma Porção de Coisas Lindas
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/bGrjJfXIuM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>

            {/*DE SE ESPERAR*/}
            <div >
              <div className='flex flex-col items-center'>
                <a className='cursor-pointer relative' onClick={() => setShowEsperar(true)}>
                  
                  <div className='w-336 h-188'>
                    <img className='rounded' src={esperar} alt="" />
                    <FontAwesomeIcon className='play z-30' icon={faCirclePlay} beat size="2xl" />
                  </div>
                </a>
                <p>Zignal - De Se Esperar</p>
              </div>
              
              <Modal
                size="lg"
                show={showEsperar}
                onHide={() => setShowEsperar(false)}
                aria-labelledby="lual-sem-lua"
                centered
              >
                <Modal.Header className='justify-center bg-gray-500' closeButton>
                  <Modal.Title className=' w-full text-center' id="lual-sem-lua">
                    De Se Esperar
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center bg-gray-500 rounded-bottom'>
                  <iframe className='rounded' width="750" height="422" src="https://www.youtube.com/embed/txp6Ue1tNeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
