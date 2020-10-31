import { store } from '..';
import { logIn, showAlert } from '../redux/Actions';

export const RegisterPost = (user, email, pass) => {
  const url = 'https://conduit.productionready.io/api/users';
  let post = { user: { email: email, password: pass, username: user } };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errors) {
        Object.keys(data.errors).forEach((i) => {
          data.errors[i].forEach((l) => store.dispatch(showAlert(`${i} ${l}`)));
        });
      } else if (data.user) {
        store.dispatch(logIn(data.user));
      }
    });
};
