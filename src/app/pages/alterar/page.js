'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import '../css/alterar.css'

export default function Alterar() {
  function alterar (e) {
    e.preventDefault();

  }
  return (
    <div>
       
      <form onSubmit={alterar}>
     
      </form>
      <ToastContainer />
    </div>
  );
}