

import React from 'react';
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
    href: "/docs/primitives/alert-dialog",
    description:
      "Atencion veterinaria a domicilio para perros y gatos.",
  },
  {
    title: "Desparasitacion",
    href: "/docs/primitives/hover-card",
    description:
      "Tratamientos internos y externos para mantener sana a tu mascota.",
  },
  {
    title: "Baño y corte",
    href: "/docs/primitives/progress",
    description:
      "Baño con productos especiales, corte de pelo y limpieza de oídos.",
  },
  {
    title: "Vacunacion",
    href: "/servicios#vacunacion",
    description: "Aplicación de vacunas obligatorias y opcionales según la especie y edad.",
  },
  {
    title: "Profilaxis",
    href: "/docs/primitives/tabs",
    description:
      "Limpieza dental profesional para prevenir enfermedades bucales.",
  },
  {
    title: "Esterilizacion",
    href: "/docs/primitives/tooltip",
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
              <li className="row-span-3">
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
              <ListItem href="#ubicacion" title="Ubicación">
                Nos encuentras en Av. Aviación 3001, San Borja, Lima - Perú.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>

        
          <Link  href="https://api.whatsapp.com/send?phone=+51902862472&text=Hola Veterinaria Firu, 
            vengo desde sus sitio web. Por favor, necesito información sobre ..." target="_blank" className={navigationMenuTriggerStyle()}>
            
              Contacto
            
          </Link>
        
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Nav;