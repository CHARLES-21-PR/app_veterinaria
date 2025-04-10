
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SlNotebook } from "react-icons/sl";

import Nosotros from './comp/Nosotros';
import Carousel from './comp/Carousel';
import Ubication from './comp/Ubication';
import AppLayout from './layauts/AppLayout';


import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Welcome({ auth}) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome"/>
            <AppLayout auth={auth}>
            <div className="view_principal mt-16">
                    <h3>Nuestros amigos de cuatro patas siempre felices</h3>
                    <p>El cuidado veterinario y los mejores productos para tu mascota en un solo lugar.</p>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"><SlNotebook /> Agenda tu consulta</button>
            </div>
            <Nosotros  />
            <div >
           
                

               
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Agrega tu consulta</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Consulta:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Carousel />
            
            <Ubication />
            
            </AppLayout>
        </>
    );
}

