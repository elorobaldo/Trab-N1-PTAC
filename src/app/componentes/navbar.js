'use client'
import { validateToken } from "../functions/validateToken";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import '../pages/css/navbar.css'

export default function Navbar(){
 
    const { push, refresh } = useRouter();
    const RemoveCookies = async (e) => {
        e.preventDefault();
        Cookies.remove('token');
        localStorage.removeItem('name');
        refresh('/')
    }
return(
 <div>
     <ul class="navbar" role="navigation">
        <li><a href='/pages/alterar'>Alterar</a></li>
        <li><a href='/pages/dashboard'>Home</a></li>
        <li><a href='/pages/registro'>Registro</a></li>
        <li><button class="clear" onClick={RemoveCookies}>LIMPAR</button></li>
    </ul>
 </div>
)
}