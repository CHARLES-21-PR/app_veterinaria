import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Flutter = () => {
  return (
    <div className='flutter'>
        <div className='flutter_vete'>
            <h3 className='mb-0'>veterinaria<span> FIRU</span></h3>
            <p><SiGooglemaps />Av. Aviación 3001, San Borja, Lima - Perú.</p>
            <div className='flutter_details'>
                <div className="contactos_flutter">
                    <h3>Contacto</h3>
                    <p><FaPhoneAlt /> Central Telefónica: 01 748 8000</p>
                    <p><FaWhatsapp /> Whatsapp: 987654321</p>
                    <p><MdEmail /> Email: Example@gmail.com</p>
                </div>
                <div className="redes_flutter">
                    <h3>Redes Sociales</h3>
                    <p><FaFacebook /> Facebook: @veterinaria Firu</p>
                    <p><AiFillInstagram /> Instagran: @veterinaria Firu</p>
                    <p><FaTiktok /> Tiktok: @veterinaria Firu</p>
                </div>
                
            </div>
            <hr />
            <p>FIRU Veterinaria © Copyright 2025</p>
        </div>
    </div>
  )
}

export default Flutter