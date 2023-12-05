'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './pages/css/login.css'


export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { push, toast } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro");
      }
      push('/pages/dashboard');
      
    } catch {
     toast.sucess();("Erro novamente");
    }
  };

  return (
    <div className="texto">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
      <div class="input-box">
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        </div>
        <div class="input-box">
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>
        <button className="btn">Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
