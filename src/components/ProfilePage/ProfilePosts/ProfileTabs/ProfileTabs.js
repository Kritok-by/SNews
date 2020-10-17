import { AppBar, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { currentUrl } from '../../../../redux/Actions';


export default function ProfileTabs({user}) {
  const [value, setValue] = useState(0),
        dispatch = useDispatch(),
        myUrl = `https://conduit.productionready.io/api/articles?author=${user}&limit=10&offset=`,
        favoritedUrl = `https://conduit.productionready.io/api/articles?favorited=${user}&limit=10&offset=`;

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };


  return(
    <div className="tabs-container">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="My Posts" onClick={()=>dispatch(currentUrl(myUrl))}/>
          <Tab label="Favorited Posts" onClick={()=>dispatch(currentUrl(favoritedUrl))}/>
        </Tabs>
      </AppBar>
    </div>
  )
};
