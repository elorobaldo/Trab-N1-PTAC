'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "@/app/componentes/navbar";
import '../css/alterar.css'

export default function Alterar() {
  function alterar (e) {
    e.preventDefault();
    toast.success("Deu certo ;)");
  }

  return (
    <div>
       <Navbar/>
      <form onSubmit={alterar}>
      <div className="texto">
        <div class="input-box">
        <p>Nome</p>
        <input type="name" required/>
        </div>
        <div class="input-box">
        <p>Email</p>
        <input type="email" required/>
        </div>
        <div class="input-box">
        <p>Senha</p>
        <input type="password" required/>
        </div>
        <p></p>
        <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}