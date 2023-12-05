'use client'

import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react';
import '../css/registro.css'
import Navbar from "@/app/componentes/navbar";


export default function Registro() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { push } = useRouter;

  const registro = async (event) => {
    event.preventDeFault();
    try {
      await postUser(user);
      await new Promise((resolve)=>{
        toast.success("usuario registrado");
        setTimeout(resolve, 5000)
      });
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
      <div className="input-box">
        <p>Nome</p>
        <input type="name" onChange={(e) => { setUser({...user, name: e.target.value }) }}/>
        </div>
        <div className="input-box">
        <p>Email</p>
        <input type="email" onChange={(e) => { setUser({...user, email: e.target.value }) }}/>
        </div>
        <div className="input-box">
        <p>Senha</p>
        <input type="password" onChange={(e) => { setUser({...user, password: e.target.value }) }}/>
        </div>
        <p></p>
        <button className="btn">Cadastrar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
