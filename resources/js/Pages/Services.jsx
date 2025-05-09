
import React from 'react';
import AppLayout from './layauts/AppLayout';  

const Services = ({ auth }) => {
  return (
    <AppLayout auth={auth}>
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, background: '#f0f0f0', color: '#333' }}>
      <style>
        {`
          .header {
            margin-top: 65px;
            background-color: #4CAF50;
            color: white;
            padding: 20px 10px;
            text-align: center;
          }

          .nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #388e3c;
          }

          .nav-list li {
            margin: 10px;
          }

          .nav-list a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }

          .nav-list a:hover {
            text-decoration: underline;
          }

          .main-content {
            padding: 30px 250px;
          }

          .servicio {
            background: white;
            padding: 20px;
            display: flex;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: relative;
          }

          .servicio h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #4CAF50;
          }

          .servicio p {
            margin-bottom: 10px;
            font-size: 20px;
          }

          .servicio img{
            border-radius: 8px;
          }

          .boton-falso {
            display: inline-block;
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            position: absolute;
            bottom: 20px;
          }

          .boton-falso:hover {
            background-color: #45a049;
          }
        `}
      </style>
      
      <header className="header">
        <h1>Servicios de la Veterinaria Firu</h1>
      </header>

      <main className="main-content">
        <section id="consulta" className="servicio">
          <div className="servicio_detalle">
            <h2>Consulta</h2>
            <p>Atención médica general para tu mascota. Diagnóstico, tratamiento y seguimiento.</p>
            <a href="#consulta" className="boton-falso">Reservar</a>
          </div>
          <img src="img/consultaVet.jpg" alt="" width="500px" height="500px"/>
        </section>

        <section id="bano" className="servicio">
          <div className="servicio_detaile">
            <h2>Baño y Corte</h2>
            <p>Baño con productos especiales, corte de pelo y limpieza de oídos.</p>
            <a href="#bano" className="boton-falso">Reservar</a>
          </div>
          <img src="img/corte_vete.jpg" alt="" width="500px" height="500px"/>
        </section>

        <section id="profilaxis" className="servicio">
          <div className="servicio_detalle">
            <h2>Profilaxis</h2>
            <p>Limpieza dental profesional para prevenir enfermedades bucales.</p>   
            <a href="#profilaxis" className="boton-falso">Reservar</a>
          </div>
          <img src="img/profilaxis.jpg" alt="" width="500px" height="500px"/>
        </section>

        <section id="desparasitacion" className="servicio">
          <div className="servicio_detalle">
            <h2>Desparasitación</h2>
            <p>Tratamientos internos y externos para mantener sana a tu mascota.</p>
            <a href="#desparasitacion" className="boton-falso">Reservar</a>
          </div>
          <img src="img/desparasitacion.jpg" alt="" width="500px" height="500px"/>
        </section>

        <section id="vacunacion" className="servicio">
          <div className="servicio_detalle">
            <h2>Vacunación</h2>
            <p>Aplicación de vacunas obligatorias y opcionales según la especie y edad.</p>
            <a href="#vacunacion" className="boton-falso">Reservar</a>
          </div>
          <img src="img/vacunacion.jpg" alt="" width="500px" height="500px"/>
        </section>

        <section id="esterilizacion" className="servicio">
          <div className="servicio_detalle">
            <h2>Esterilización</h2>
            <p>Procedimiento quirúrgico seguro y eficaz para el control reproductivo.</p>
            <a href="#esterilizacion" className="boton-falso">Reservar</a>
          </div>
          <img src="img/esterilizacion.jpg" alt="" width="500px" height="500px"/>
        </section>
      </main>
    </div>
    </AppLayout>
  );
};

export default Services;