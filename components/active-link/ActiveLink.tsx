'use client';
import Link from "next/link";
import style from "./ActiveLink.module.css"
import {usePathname} from "next/navigation";
interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {
    //IMPORTANTE => SI QUREMOS USAR ESTE HOOK DEBEMOS DE CONVERTIR NUESTRO SERVER COMPONENTE EN UN CLIENT COMPONENT
    //PARA ELLO USAMOS 'USE CLIENT' asdsada
    //este es un hook que nos permite ver el path donde nos encontramos
    const pathname = usePathname();
    return (
        <Link
            //para colocarle el stilo ya que es codigo de js usamos el {} y elegimos el stilo
            //si el pathname es igual al path entonces usando el operador && va a añadir el style pero sino no añadira nada
            className={`${style.link}  ${ (pathname === path) && style['active-link']}`}
            href={path}>{text}
        </Link>
    );
};
