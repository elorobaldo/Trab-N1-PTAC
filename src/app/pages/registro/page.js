'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function Registro() {
  function registro(e) {
    e.preventDefault();
  }
  return (
    <div>
     
      <form onSubmit={registro}>
 
      </form>
      <ToastContainer />
    </div>
  );
}
