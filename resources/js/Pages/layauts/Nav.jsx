

import React from 'react';
import { FaStethoscope } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { BiInjection } from "react-icons/bi";
import { FaTooth } from "react-icons/fa";
import { LuBugOff } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { Link } from '@inertiajs/react';
import { cn } from "@/lib/utils";
import logo from '/public/img/logo.png';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu"

const components = [
  {
    title: "Consulta",
    href: "/servicios#consulta",
    img: <FaStethoscope />,
    description:
      "Atencion veterinaria a domicilio para perros y gatos.",
  },
  {
    title: "Desparasitacion",
    href: "/servicios#desparasitacion",
    img: <LuBugOff />,
    description:
      "Tratamientos internos y externos para mantener sana a tu mascota.",
  },
  {
    title: "Baño y corte",
    href: "/servicios#bano",
    img: <FaScissors />,
    description:
      "Baño con productos especiales, corte de pelo y limpieza de oídos.",
  },
  {
    title: "Vacunacion",
    href: "/servicios#vacunacion",
    img: <BiInjection />,
    description: "Aplicación de vacunas obligatorias y opcionales según la especie y edad.",
  },
  {
    title: "Profilaxis",
    href: "/servicios#profilaxis",
    img: <FaTooth />,
    description:
      "Limpieza dental profesional para prevenir enfermedades bucales.",
  },
  {
    title: "Esterilizacion",
    href: "/servicios#esterilizacion",
    img: <FaStethoscope />,
    description:
      "Procedimiento quirúrgico seguro y eficaz para el control reproductivo.",
  },
]

const Nav = () => {
  return (
    <NavigationMenu >
      <NavigationMenuList className='mb-0'>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] mb-0">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md mb-0"
                    href="welcome#seccion_nosotros"
                  >
                    <img src={logo} alt="Logo de Veterinaria FIRU" className="w-16 h-16 mb-4" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Somos Veterinaria FIRU
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Cuidado adecuado para tus mascotas con los mejores tratamientos
                      de belleza y salud.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/welcome#ubicacion" title={<><SiGooglemaps /> Ubicación </>}>
                Nos encuentras en Av. Aviación 3001, San Borja, Lima - Perú.
              </ListItem>
              <ListItem href="/welcome#NuestraFamilia" title={<><FaUserFriends /> Nuestra familia </>}>
              Somos una clínica veterinaria comprometida con ofrecer atención integral, basada en la ciencia,
               tecnología avanzada y un cuidado ético y respetuoso para tu mascota.
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[800px] gap-0 p-4 md:w-[400px] md:grid-cols-4 lg:w-[700px]">
            <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md mb-0"
                    href="/servicios"
                  >
                    <img src={logo} alt="Logo de Veterinaria FIRU" className="w-16 h-16 mb-4" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Servicios
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Cuidado adecuado para tus mascotas con los mejores tratamientos
                      de belleza y salud.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  img={component.img}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>

        
          
          
          <a href="https://api.whatsapp.com/send?phone=+51902862472&text=Hola Veterinaria Firu, 
            vengo desde sus sitio web. Por favor, necesito información sobre ..." target='_blank' className={navigationMenuTriggerStyle()}>Contacto</a>
        
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title,img, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex alig-item-center gap-1">{img} {title}</div>
          <p className=" text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Nav;