import { Head, Link } from '@inertiajs/react';
import  Nav  from './layauts/Nav';
import Dropdown from '@/Components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SlNotebook } from "react-icons/sl";
import Flutter from './layauts/Flutter';
import Nosotros from './comp/Nosotros';
import Carousel from './comp/Carousel';
import Ubication from './comp/Ubication';
import Services from './Services';


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
            <div className="flex h-16 justify-between items-center mb-0 px-10 navigation fixed z-10 w-100 bg-white position-absolute top-0">
                <div className='name_vete'>
                    <h3 className='mb-0'>veterinaria<span> FIRU</span></h3>
                </div>
                <div>
                    <Nav />
                </div>
                <nav className='mb-0'>
                    {auth.user ? (
                        
                        // <Link
                        //     href={route('dashboard')}
                        //     className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        // >
                        //     Dashboard
                        // </Link>
                        <div className="hidden sm:ms-6 sm:flex sm:items-center mb-0">
                                <div className="relative ms-3 mb-0">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex  rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                <p className='mb-0'>Hola, {auth.user.name}</p>

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>                       
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                            
                        </>
                    )}
                    
                </nav>
                           
                            
            </div>
            <div className="view_principal mt-16">
                    <h3>Nuestros amigos de cuatro patas siempre felices</h3>
                    <p>El cuidado veterinario y los mejores productos para tu mascota en un solo lugar.</p>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"><SlNotebook /> Agenda tu consulta</button>
            </div>
            <Nosotros  />
            <div >
           
                

               
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Agrega tu consulta</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Consulta:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Enviar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Carousel />
            <Services />
            <Ubication />
            <Flutter />
        </>
    );
}

