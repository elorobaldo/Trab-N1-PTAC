const url = "https://api-user-backend.vercel.app"

const getUserAuthenticated = async (user) => {
    try {
        const responseOfApi = await fetch(url + "/user/authenticated",{
            method: "POST",
            headers: { 'Content-Type': 'Application/json'}, 
            body: JSON.stringify(user)
        });
    
        const userAuth = await responseOfApi.json();
        console.log ( userAuth )
        return userAuth;
    } catch {
        return null;
        }
}

const getUsers = async () =>{
    try {
        const responseOfApi = await fetch(url + "/users",{
            method: "GET",
            headers: { 'Content-Type': 'Application/json'}, 
        });
    
        const users = await responseOfApi.json();
        return users;
    } catch {
        return null;
        }
}

const postUser = async (user) => {
    try {
        const responseOfApi = await fetch(url + "/users", {
            method: 'POST',
            headers:{ 'Content-Type': 'Application/json'},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        return userSave;
    } catch {
        return null;
    }
}


export { getUsers, getUserAuthenticated, postUser };

