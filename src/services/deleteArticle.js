export const deleteArticle = (slug, token) => {
  fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
    method: 'DELETE',
    body: JSON.stringify({}),
    headers: {
      'Authorization' : `Token ${token}`,
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
