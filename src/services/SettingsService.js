import { store } from "..";
import { errLogIn, logIn, showAlert } from "../redux/Actions";

export const NewSettings = async (img = '', name = '', bio = '', email = '', pass = '', state) => {
  const url = "https://conduit.productionready.io/api/user";
  const newDate = new Date();
  const post = {"user": {bio: bio,
  createdAt: state.createdAt,
  email: email,
  id: state.id,
  image: img,
  password: pass,
  token: state.token,
  updatedAt: newDate.toISOString(),
  username: name}};

  await fetch(url,
    {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      'Authorization' : `Token ${state.token}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errors) {
        console.log(data)
        Object.keys(data.errors).forEach(i=>{
          data.errors[i].forEach(l=>store.dispatch(showAlert(`${i} ${l}`)))
        })
      } else if (data.user) {
        console.log(data);
        store.dispatch(logIn(data.user))
      }
    });
};
