import React from 'react'
import cotizador from "../img/cotizador.png";

const Proyectos = () => {
  return (
    <div className='habilidades-main'>
        <div className='hab-box'>
        <img src={cotizador} alt=""  height={250}width={250} className="imgP"  />
       <p>
       <a className='urlP' href="https://cotizador-de-criptos-virid.vercel.app">cotizador</a>
       </p>
        </div>
    
    </div>
  )
}

export default Proyectos
