import { getUsers } from "@/app/functions/handlerAcessAPI";
import Navbar from "@/app/componentes/navbar";
import '../css/home.css'

export default  function Dashboard() {
   const users = getUsers()
    return (
        <div>
              <Navbar/>
            {users?.map((user, index) =>
            <div key={index}>
                <h1>{user.name} {user.password}</h1>
            </div>
            )}
        </div>
    );
};