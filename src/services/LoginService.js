import { store } from "..";
import { logIn, errLogIn } from "../redux/Actions";




export const LoginPost = (email, pass) => {
  const url = 'https://conduit.productionready.io/api/users/login';
  let post = {"user":{"email": email,"password": pass}};

   fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.errors){
      return store.dispatch(errLogIn(data.errors['email or password']))
    } else if(data.user){
      return store.dispatch(logIn(data.user))
    }})
};
