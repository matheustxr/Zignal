import {React, useState } from 'react'
import Particulas from '../components/Particles'
import Modal from 'react-bootstrap/Modal';

export default function Videos() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [lgShow, setLgShow] = useState(false);;
  return (
    <>
      <Particulas />
      <div className='px-20  relative z-10'>
        <h1 className='text-5xl my-3 text-center'>Video Clipes</h1>
        <div>
          <h2 className='text-4xl my-3 lineTitle'>Carreira Solo</h2>
          <div className='flex flex-wrap px-20 gap-y-12 mt-4 justify-around'>
            <div>
              <a onClick={handleShow}>
                <img src="src/assets/hqdefault.webp" alt="" />
              </a>

              
            </div>

          </div>
          
        </div>

        <div className='mt-12'>
          <h2 className='text-4xl my-3 lineTitle'>Zignal</h2>
          <div className='flex flex-wrap px-20 gap-y-12 mt-4 justify-around'>
            <div >
              <a onClick={() => setLgShow(true)}>
                <img src="src/assets/thumbs/lual-sem-lua.webp" alt="" />
              </a>

              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg" className='text-black text-center'>
                    Lual sem Lua
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex justify-center py-10'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/DQYej0AowYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
