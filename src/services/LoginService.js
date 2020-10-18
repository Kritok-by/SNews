import { store } from "..";
import { logIn, showAlert } from "../redux/Actions";

export const LoginPost = (email, pass) => {
  const url = "https://conduit.productionready.io/api/users/login";
  let post = { user: { email: email, password: pass } };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errors) {
        Object.keys(data.errors).forEach((i) => {
          data.errors[i].forEach((l) => store.dispatch(showAlert(`${i} ${l}`)));
        });
      } else if (data.user) {
        return store.dispatch(logIn(data.user));
      }
    });
};
