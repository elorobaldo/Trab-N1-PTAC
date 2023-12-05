import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React, { useStates } from 'react';
import '../css/registro.css'
import Navbar from "@/app/componentes/navbar";


export default function Registro() {
  const [user, setUser] = useStates({
    name: '',
    email: '',
    password: '',
  });
  const { push } = useRouter;

  const registro = async (event) => {
    event.preventDeFault();
    try {
      await postUser(user);
      return push("/pages/dashboard");
    } catch {
      return toast.error("Erro");
    }
  };

  return (
    <div>
     <Navbar/>
      <form onSubmit={registro}>
      <div  className="texto">
      <div class="input-box">
        <p>Nome</p>
        <input type="name" required/>
        </div>
        <div class="input-box">
        <p>Email</p>
        <input type="email" onChange={(e) => { setUser({...user, email: e.target.value }) }}/>
        </div>
        <div class="input-box">
        <p>Senha</p>
        <input type="password" required/>
        </div>
        <p></p>
        <button className="btn">Cadastrar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
