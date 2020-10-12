export function Like(slug, method, token){
  const url = `https://conduit.productionready.io/api/articles/${slug}/favorite`;

   fetch(url, {
    method: method,
    body: JSON.stringify({}),
    headers: {
      'Authorization' : `Token ${token}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.errors){
      // return store.dispatch(errLogIn(data.errors['email or password']))
    } else if(data.user){
      console.log(data)
    }})
};
