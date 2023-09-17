import { getUsers } from "@/app/functions/handlerAcessAPI";

import '../css/home.css'

export default  function Dashboard() {
   const users = getUsers()
    return (
        <div>
             
            {users?.map((user, index) =>
            <div key={index}>
                <h1>{user.name} {user.password}</h1>
            </div>
            )}
        </div>
    );
};