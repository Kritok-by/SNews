

export const NewArticleService = (title, about, text, tags) => {
  const url = 'https://conduit.productionready.io/api/article';
  let post = {article: {tagList: [], title: title, description: about, body: text}};
  console.log(JSON.stringify(post))

   fetch(url, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  .then(response=>console.log(response.json()))
  // .then(data=>{
  //   if(data.errors){
  //     console.log(data)
  //   } else if(data.user){
  //     console.log(data)
  //   }})
};
