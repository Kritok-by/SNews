import { store } from "..";
import { showAlert } from "../redux/Actions";

export const NewArticleService = (
  title,
  about,
  text,
  tags,
  token,
  history,
  method,
  slug
) => {
  const url = `https://conduit.productionready.io/api/articles/${slug}`;
  const post = {
    article: {
      tagList: [...tags],
      title: title,
      description: about,
      body: text,
    },
  };

  fetch(url, {
    method: method,
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        Object.keys(data.errors).forEach((i) => {
          data.errors[i].forEach((l) => store.dispatch(showAlert(`${i} ${l}`)));
        });
      } else if (data.article) {
        history.push(`/post/${data.article.slug}`);
      }
    });
};
