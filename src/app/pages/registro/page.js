'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import '../css/registro.css'


export default function Registro() {
  function registro(e) {
    e.preventDefault();
    toast.success("Deu bom");
  }
  return (
    <div>
     
      <form onSubmit={registro}>
      <div  className="texto">
        <p>Nome:</p>
        <input type="name" required/>
        <p>Email:</p>
        <input type="email" required/>
        <p>Senha</p>
        <input type="password" required/>
        <p></p>
        <button className="btn">Cadastrar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
