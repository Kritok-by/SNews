import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Tabes.scss'
import { AppBar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { hashTag, numberTab, currentUrl } from '../../../../redux/Actions';
import { useHistory } from 'react-router';


export default function Tabes() {
  const user = useSelector(i=>i.articles),
        auth = useSelector(state=>state.autorize.currentUser),
        history = useHistory(),
        dispatch = useDispatch(),
        feedUrl = 'https://conduit.productionready.io/api/articles/feed?limit=10&offset=',
        url = 'https://conduit.productionready.io/api/articles?limit=10&offset=';

  const handleChange = (event, newValue) => {
    dispatch(hashTag('none'))
    dispatch(numberTab(newValue));
  };

  const AddTag = () => {
    if(user.hashTag !== 'none'){
      return <Tab label={`#${user.hashTag}`}/>
    }
  };

  function feedClick(){
    auth.id === undefined?history.push('/signIn'):dispatch(currentUrl(feedUrl))
  }

  return(
    <div className="tabs-container">
      <AppBar position="static" color="default">
        <Tabs
          value={user.numberTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Your Feed" onClick={()=>feedClick()}/>
          <Tab label="Global Feed" onClick={()=>dispatch(currentUrl(url))}/>
          {AddTag()}
        </Tabs>
      </AppBar>
    </div>
  )
};
