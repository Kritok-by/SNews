import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NewArticleService } from '../../services/NewArticleService';

export const AddArticle = () => {
  const token = useSelector(i=>i.autorize.currentUser.token),
        currentValues = useSelector(i=>i.articles.values),
        [title, setTitle] = useState(currentValues.title),
        [about, setAbout] = useState(currentValues.about),
        [text, setText] = useState(currentValues.text),
        [tags, setTags] = useState(currentValues.tags),
        history = useHistory(),
        error = useSelector(state => state.autorize.errorLogin);
      const alert = () =>{
    if(error.length !== 0){
      return error.map((i, e)=><Alert key={e} variant="outlined" severity="error">{i}</Alert>)
      }}


  const submit=(e)=>{
    let method = 'POST';
    if(currentValues.title !== ''){
      method = 'PUT'
    }
    e.preventDefault()
    NewArticleService(title, about, text, tags.split(','), token, history, method, currentValues.slug)
  }
  console.log('dasdasdasd,asdsdasd,asdasdasd'.split(','))
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12 add-article">
          <form onSubmit={submit}>
            <h2>New article</h2>
            {alert()}
            <div className="form-group">
              <label>Article Titile</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>What's is article about</label>
              <input
                type="text"
                className="form-control"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Write your article (in markdown)
              </label>
              <textarea
                className="form-control"
                rows="3"
                value={text}
                onChange={(e)=>setText(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Enter tags</label>
              <input
                type="text"
                className="form-control"
                value={tags}
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
