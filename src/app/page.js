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

  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro");
      }
      push('/pages/dashboard');
      
    } catch {
     toast.error("")
    }
  }

  return (
    <div className="caixa">
      <h1>Login</h1>
      <ToastContainer/>
    </div>
  )
}
