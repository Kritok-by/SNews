import React from 'react';
import {Header} from './components/Header/Header';
import './App.scss'
import Main from './components/Main/Main';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUP/SignUp';
import { YSettings } from './components/YSettings/YSettings';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <YSettings/> */}
    </div>
  );
}
export default App;
