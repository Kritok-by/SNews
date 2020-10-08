export const NewSettings = async (img = '', name = '', bio = '', email = '', pass = '', state) => {
  const url = "https://conduit.productionready.io/api/user";
  let post = {"user": {bio: bio,
  createdAt: state.createdAt,
  email: email,
  id: state.id,
  image: img,
  password: pass,
  token: state.token,
  updatedAt: state.updatedAt,
  username: name}};

  await fetch(url,
    {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  })
    .then((res) => res.json())
    .then((data) => {
      // if (data.errors) {
      //   console.log(data);
      //   // store.dispatch(errLogIn(Object.entries(data.errors)))
      // } else if (data.user) {
      //   console.log(data);
      //   // store.dispatch(logIn(data.user))
      // }
      console.log(data)
    });
};
