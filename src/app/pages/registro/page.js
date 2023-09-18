'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import '../css/registro.css'
import Navbar from "@/app/componentes/navbar";


export default function Registro() {
  function registro(e) {
    e.preventDefault();
    toast.success("Deu bom");
  }
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
        <input type="email" required/>
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
