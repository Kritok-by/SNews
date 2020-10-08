import React, { useState } from 'react'
import { NewArticleService } from '../../services/NewArticleService';

export const AddArticle = () => {
  const [title, setTitle] = useState(),
        [about, setAbout] = useState(),
        [text, setText] = useState(),
        [tags, setTags] = useState();

  const submit=(e)=>{
    e.preventDefault()
    NewArticleService(title, about, text, tags)
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12 add-article">
          <form onSubmit={submit}>
            <h2>New article</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Article Titile</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">What's is article about</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setAbout(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Write your article (in markdown)
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e)=>setText(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Enter tags</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setTags(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Publish Article
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
