import React from 'react'
import { SiGooglemaps } from "react-icons/si";
import { FaCheck } from "react-icons/fa";

const Ubication = () => {
  return (
    <div id='ubicacion' className='ubication'>
        <h2>Veterinaria FIRU en San Borja:
        Siempre cerca de ti y tu mascota</h2>
        <p>Ofrecemos atención veterinaria 24 horas al día para estar siempre disponibles cuando tu mascota lo necesite. </p>
        <div className='ubication-mapa'>
            <div className='ubication-details'>
                <h3>FIRU
                Clínica Veterinaria</h3>
                <p>Av. Aviación 3001,
                San Borja, Lima – Perú</p>
                <p>Todo en un solo lugar:</p>
                <ul>
                    <li><FaCheck /> Consulta veterinaria</li>
                    <li><FaCheck /> Baño y corte</li>
                    <li><FaCheck /> Farmacia veterinaria</li>
                    <li><FaCheck /> Centro de cirugia veterinaria</li>
                </ul>
                <a href="https://maps.app.goo.gl/6LRiKqDdaCLCtFxQ7"><SiGooglemaps /> Ir a Google maps</a>
            </div>
            <iframe className='bg-dark'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.349040614697!2d-76.3898433253428!3d-13.07705156193773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910ff9db48c5fe69%3A0x323cb2839feaf17!2sCl%C3%ADnica%20Veterinaria%20Torres!5e0!3m2!1ses-419!2spe!4v1743984499796!5m2!1ses-419!2spe" width="500" height="450" />
        </div>
    </div>
  )
}

export default Ubication