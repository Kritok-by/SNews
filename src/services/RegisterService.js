
import { store } from "..";
import { logIn, errLogIn } from "../redux/Actions";




export const RegisterPost = (user, email, pass) => {
  const url = 'https://conduit.productionready.io/api/users';
  let post = {"user":{"email": email,"password": pass, "username": user}}

   fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.errors){
      store.dispatch(errLogIn(Object.entries(data.errors)))
    } else if(data.user){
      store.dispatch(logIn(data.user))
    }
})
};
