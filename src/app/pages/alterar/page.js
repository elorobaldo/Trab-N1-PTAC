'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import '../css/alterar.css'

export default function Alterar() {
  function alterar (e) {
    e.preventDefault();
    toast.success("Deu certo ;)");
  }

  return (
    <div>
       
      <form onSubmit={alterar}>
     <div className="texto">
        <p>Nome:</p>
        <input type="name" required/>
        <p>Email:</p>
        <input type="email" required/>
        <p>Senha</p>
        <input type="password" required/>
        <p></p>
        <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}