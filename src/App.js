
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
import ScrollToTop from './ScrollToTop';

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
        <ScrollToTop/>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/settings" component={YSettings} />
            <Route exact path="/new-post" component={AddArticle} />
            <Route exact path="/post/:article?" component={ArticlePageService} />
            <Route exact path='/profile/:user?' component={ProfilePageService} />
          </Switch>
      </Router>
    </div>
  );
}





export default App;
