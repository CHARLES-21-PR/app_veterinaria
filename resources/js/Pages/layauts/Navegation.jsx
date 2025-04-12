import React from 'react'
import  Nav  from './Nav';
import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';

const Navegation = ({ user }) => {
    

  return (
    <div>
        <div className="flex h-16 justify-between items-center mb-0 px-10 navigation fixed z-10 w-100 bg-white top-0">
                <div className='name_vete'>
                    <h3 className='mb-0'>veterinaria<span> FIRU</span></h3>
                </div>
                <div>
                    <Nav />
                </div>
                <nav className='mb-0'>
                    {user ? (
                        
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
                                                <p className='mb-0'>Hola, {user.name}</p>

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
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white text-decoration-none"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white text-decoration-none"
                            >
                                Register
                            </Link>
                            
                        </>
                    )}
                    
                </nav>
                           
                            
            </div>
    </div>
  )
}

export default Navegation