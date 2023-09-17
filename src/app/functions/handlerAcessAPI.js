'use server'
const users = [
    {
        name:'Stevan', email:'stevan.silva@gmail.com', password:'456',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
       },
       
       {
        name:'Manoel', email:'manoel.gomes@gmail.com', password:'789',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
       },
       
       {
        name:'Eloisa', email:'elo.rob@gmail.com', password:'321',
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
       }
]

const getUserAuthenticated = (user) => {
    let userAuth= {}
for ( let i = 0; i < users.length; i++ ){
    if (users[i].email === user.email && users[i].password === user.password) {
        return userAuth = users[i] ;
    }
 }
 return userAuth
}

const getUsers = () =>{
return users;
}
export { getUsers, getUserAuthenticated };

