import React, { useState } from 'react'
import Authorized from './Authorized/Authorized';
import './Header.scss';
import NotAuthorized from './NotAuthorized/NotAuthorized';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Header = ()=>{
const [number, setNumber] = useState(0)
const [vis, setVis] = useState('none')
      window.addEventListener('scroll',()=>{
        setNumber(document.documentElement.scrollTop)
        number>=150?setVis('vis'):setVis('none')
      })
      let auth = useSelector(state=>state.autorize.currentUser);
      let ifAuth = ()=>{
        return auth.id === undefined ? <NotAuthorized/> : <Authorized/>
      }
  return(
    <header>
      <nav className='navigation '>
        <div className="center">
        <Link to='/'><div className={`logo ${vis}`}>
            <img src={require('./img/logo.svg')} alt="" className={`main-logo-img`}/>
          </div></Link>
          {ifAuth()}
        </div>
      </nav>
    </header>
  )
}
