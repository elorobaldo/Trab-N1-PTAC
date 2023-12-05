import 'react-toastify/dist/ReactToastify.css';
import { getUsers } from "@/app/functions/handlerAcessAPI";
import Navbar from "@/app/componentes/navbar";
import '../css/home.css'

export default  function Dashboard() {
   const users = await getUsers()
    return (
        <div>
            <div className="dash">
            <Navbar/>
            </div>
            <div className="classlist">
                <center><h1 className="dash1"><p>Usuários</p></h1></center>
                <div className="listuser">
            {users?.map((user, index) =>
            <div key={index}>
                <h1>{user.name} {user.password}</h1>
            </div>
            )}
        </div>
        </div>
        </div>
    );
};