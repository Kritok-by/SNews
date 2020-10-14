
import React, { useEffect } from 'react';
import {Header} from './components/Header/Header';
import './App.scss'
import Main from './components/Main/Main';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUP/SignUp';
import { YSettings } from './components/YSettings/YSettings';
import { AddArticle } from './components/AddArticle/AddArticle';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPost } from './services/LoginService';
import { ProfilePageService } from './services/ProfilePageService';
import { ArticlePageService } from './services/ArticlePageService';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(i=>i.autorize.currentUser.username)

  useEffect(() => {
    if(localStorage.getItem('account') !== null){
       let strArr = localStorage.getItem('account').split(' ')
      LoginPost(strArr[0], strArr[1])
     }
  }, [user])

  return (
    <div className="wrapper">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Main/></Route>
          <Route exact path="/signIn"><SignIn/></Route>
          <Route exact path="/register"><SignUp/></Route>
          <Route exact path="/settings"><YSettings/></Route>
          <Route exact path="/new-post"><AddArticle/></Route>
          <Route exact path="/post/:article?"><ArticlePageService/></Route>
          <Route exact path={`/profile/:user?`}><ProfilePageService/></Route>
        </Switch>
      </Router>
    </div>
  );
}





export default App;
