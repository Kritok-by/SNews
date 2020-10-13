


export const NewArticleService = (title, about, text, tags, token) => {
  const url = 'https://conduit.productionready.io/api/articles/';
  const post = {"article":{"tagList": [],"title": title,"description": about,"body": text}};

   fetch(url, {
    method: 'POST',
    headers: {
      'Authorization' : `Token ${token}`,
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(post)
  })
  .then(response=>console.log(response.json()))
  // .then(data=>{
  //   if(data.errors){
  //     console.log(data)
  //   } else if(data.user){
  //     console.log(data)
  //   }})
};
