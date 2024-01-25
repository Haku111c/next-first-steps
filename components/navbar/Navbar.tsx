// "use client"
import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components";
const navItems = [
    {path: "/about", text: "About"},
    {path: "/pricing", text: "Pricing"},
    {path: "/contact", text: "Contact"},
]
export const Navbar = async () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href={'/'} className='flex items-center'>
                <HomeIcon className="mr-2"></HomeIcon>
                <span>Home Page</span>
            </Link>
            <div className="flex flex-1"></div>
            {
                navItems.map((navItem) => (
                    // <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
                    //Nuestro componente nos pide tanto el path como el text pero podemos envair el navItem desestructurando las propiedades
                    //y tambien colocamos el key ya que este lo pide si o si el map
                    <ActiveLink key={navItem.text} {...navItem}  ></ActiveLink>

                ))
            }
        </nav>
    );
};
